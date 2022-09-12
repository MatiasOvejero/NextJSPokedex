import React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  BasicInfo,
  BackArrow,
  Container,
  FavIcon,
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
  Anchor,
} from "../../components/Pokemon/PokemonCard.styled";
import { MainPokemon, Pokemon } from "../../types/model";
import PokemonAbout from "../../components/Pokemon/PokemonAbout";
import PokemonStats from "../../components/Pokemon/PokemonStats";

export async function getServerSideProps(context) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.params.pokemon}`);

  const pokemonData = await resp.json();

  //  STATS no esta tipado porque aun no lo estoy utilizando
  const pokemon: Pokemon = {
    abilities: pokemonData.abilities,
    exp: pokemonData.base_experience,
    height: pokemonData.height,
    image: pokemonData.sprites.front_default,
    name: pokemonData.name,
    number: pokemonData.id,
    stats: pokemonData.stats,
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
  const [current, setCurrent] = useState("about");
  const Tabs = {
    about: <PokemonAbout exp={pokemon.exp} height={pokemon.height} weight={pokemon.weight} />,
    stats: <PokemonStats />,
  };

  const setAboutTab = () => setCurrent("about");
  const setStatsTab = () => setCurrent("stats");

  return (
    <Container type={mainType}>
      <InfoContainer>
        <TopNav>
          <Link href="/">
            <Anchor>
              <BackArrow>←</BackArrow>
            </Anchor>
          </Link>
          <FavIcon>♥</FavIcon>
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
          <tbody>
            <TableRow>
              <TableCell type={mainType} onClick={setAboutTab}>
                About
              </TableCell>
              <TableCell type={mainType} onClick={setStatsTab}>
                Stats
              </TableCell>
              <TableCell type={mainType}>Evolution</TableCell>
              <TableCell type={mainType}>Moves</TableCell>
            </TableRow>
          </tbody>
        </TableNavbar>
        {Tabs[current]}
      </InfoTable>
    </Container>
  );
}
