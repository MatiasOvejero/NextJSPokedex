import React from "react";
import Link from "next/link";
import {
  BasicInfo,
  Container,
  IdContainer,
  Image,
  InfoContainer,
  Name,
  InfoTable,
  TopNav,
  Type,
  TypeAndNameContainer,
  TypeContainer,
  TableNavbar,
  TableRow,
  TableCell,
} from "../../components/PokemonCard.styled";
import { MainPokemon, Pokemon } from "../../types/model";
import PokemonAbout from "../../components/PokemonAbout";

export async function getServerSideProps(context) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.params.pokemon}`);

  const pokemonData = await resp.json();
  console.log("🚀 ~ file: [pokemon].page.tsx ~ line 26 ~ getServerSideProps ~ pokemonData", pokemonData);

  const pokemon = {
    abilities: pokemonData.abilities,
    height: pokemonData.height,
    image: pokemonData.sprites.front_default,
    name: pokemonData.name,
    number: pokemonData.id,
    exp: pokemonData.base_experience,
    types: pokemonData.types,
    weight: pokemonData.weight,
  };

  return {
    props: {
      pokemon,
    },
  };
}

export default function PokemonCard({ pokemon }) {
  const mainType: TypeForBackground = pokemon.types[0].type.name;

  return (
    <Container type={mainType}>
      <InfoContainer>
        <TopNav>
          <Link href="/">
            <a>←</a>
          </Link>
          <div>♥</div>
        </TopNav>
        <BasicInfo>
          <TypeAndNameContainer>
            <Name>{pokemon.name}</Name>
            <TypeContainer>
              {pokemon.types.map((types, index) => (
                <Type key={index} type={types.type.name}>
                  {types.type.name}
                </Type>
              ))}
            </TypeContainer>
          </TypeAndNameContainer>
          <IdContainer># {pokemon.number}</IdContainer>
        </BasicInfo>
        <Image src={pokemon.image} />
      </InfoContainer>
      <InfoTable>
        <TableNavbar>
          <TableRow>
            <TableCell type={mainType}>About</TableCell>
            <TableCell type={mainType}>Stats</TableCell>
            <TableCell type={mainType}>Evolution</TableCell>
            <TableCell type={mainType}>Moves</TableCell>
          </TableRow>
        </TableNavbar>
        <PokemonAbout exp={pokemon.base_experience} height={pokemon.height} weight={pokemon.weight}></PokemonAbout>
      </InfoTable>
    </Container>
  );
}
