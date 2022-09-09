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

  const pokemon = {
    abilities: pokemonData.abilities,
    height: pokemonData.height,
    image: pokemonData.sprites.front_default,
    name: pokemonData.name,
    number: pokemonData.id,
    species: pokemonData.species.name,
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
  console.log("🚀 ~ file: [pokemon].page.tsx ~ line 47 ~ PokemonCard ~ pokemon", pokemon);
  const mainType: TypeForBackground = pokemon.types[0].type.name;

  return (
    <Container>
      <InfoContainer>
        <TopNav>
          <div>←</div>
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
        <PokemonAbout></PokemonAbout>
      </InfoTable>
    </Container>
  );
}
