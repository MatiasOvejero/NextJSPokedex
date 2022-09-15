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
} from "./PokemonCard.styled";
import { MainPokemon, makePokemon, Pokemon } from "../../types/model";
import PokemonAbout from "../../components/Pokemon/PokemonAbout";
import PokemonStats from "../../components/Pokemon/PokemonStats";
import { TypeForBackground } from "../../utils/backgroundColorSelector";
import { AppContext } from "next/app";
import { NextPageContext } from "next";
import { JsxElement } from "typescript";

interface Context extends NextPageContext {
  params: {
    pokemon: string;
  };
}

export async function getServerSideProps(context: Context) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.params.pokemon}`);

  const pokemonData = await resp.json();

  const pokemon: Pokemon = makePokemon({
    abilities: pokemonData.abilities,
    exp: pokemonData.base_experience,
    height: pokemonData.height,
    image: pokemonData.sprites.front_default,
    name: pokemonData.name,
    id: pokemonData.id,
    stats: pokemonData.stats,
    types: pokemonData.types,
    weight: pokemonData.weight,
  });

  return {
    props: {
      pokemon,
    },
  };
}

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  console.log("🚀 ~ file: [pokemon].page.tsx ~ line 66 ~ PokemonCard ~ pokemon", pokemon.id);
  const mainType: TypeForBackground = pokemon.types[0].type.name;
  const [current, setCurrent] = useState("about");

  const Tabs: { [key: string]: JSX.Element } = {
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
          <IdContainer># {pokemon.id}</IdContainer>
        </BasicInfo>
        <Image src={pokemon.image} />
      </InfoContainer>
      <InfoTable>
        <TableNavbar>
          <tbody>
            <TableRow>
              <TableCell>
                <button onClick={setAboutTab}>About</button>
              </TableCell>
              <TableCell>
                <button onClick={setStatsTab}>Stats</button>
              </TableCell>
              <TableCell>Evolution</TableCell>
              <TableCell>Moves</TableCell>
            </TableRow>
          </tbody>
        </TableNavbar>
        {Tabs[current]}
      </InfoTable>
    </Container>
  );
}
