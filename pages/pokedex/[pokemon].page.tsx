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
  ButtonTab,
} from "./[pokemon].styled";
import { makePokemon, Pokemon, Evolution, Species } from "../../types/model";
import PokemonAbout from "../../components/PokemonAbout/PokemonAbout";
import PokemonStats from "../../components/PokemonStats/PokemonStats";
import { TypeForBackground } from "../../utils/backgroundColorSelector";
import { NextPageContext } from "next";
import PokemonMoves from "../../components/PokemonMoves/PokemonMoves";
import PokemonEvolution from "../../components/PokemonEvolution/PokemonEvolution";

interface Context extends NextPageContext {
  params: {
    pokemon: string;
  };
}

export async function getServerSideProps(context: Context) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.params.pokemon}`);
  const pokemonData = await resp.json();

  const evolutionUrlRes = await fetch(pokemonData.species.url);
  const evolutionUrl = await evolutionUrlRes.json();

  const evolutionChainRes = await fetch(evolutionUrl.evolution_chain.url);
  const evolutionChainData = await evolutionChainRes.json();

  const hasEvolves_to = evolutionChainData.chain.evolves_to;
  const evolutions: Species[] = [];
  let counter = 0;

  const processEvolution = (evolution: Evolution) => {
    counter++;
    if (evolution) {
      evolutions.push(evolution.species);
      if (evolution.evolves_to.length > 0) {
        processEvolution(evolution.evolves_to[0]);
      }
    }
  };
  console.log("🚀 ~ file: [pokemon].page.tsx ~ line 61 ~ processEvolution ~ counter", counter);

  processEvolution(hasEvolves_to[0]);

  const pokemon: Pokemon = makePokemon({
    hp: pokemonData.stats[0].base_stat,
    attack: pokemonData.stats[1].base_stat,
    defense: pokemonData.stats[2].base_stat,
    special_attack: pokemonData.stats[3].base_stat,
    special_defense: pokemonData.stats[4].base_stat,
    speed: pokemonData.stats[5].base_stat,
    abilities: pokemonData.abilities,
    exp: pokemonData.base_experience,
    height: pokemonData.height,
    image: pokemonData.sprites.front_default,
    name: pokemonData.name,
    id: pokemonData.id,
    stats: pokemonData.stats,
    evolution: evolutionChainData.chain.evolves_to,
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
  const mainType: TypeForBackground = pokemon.types[0].type.name;
  const [current, setCurrent] = useState("about");

  const Tabs: { [key: string]: JSX.Element } = {
    about: <PokemonAbout exp={pokemon.exp} height={pokemon.height} weight={pokemon.weight} />,
    stats: (
      <PokemonStats
        hp={pokemon.hp}
        attack={pokemon.attack}
        defense={pokemon.defense}
        special_attack={pokemon.special_attack}
        special_defense={pokemon.special_defense}
        speed={pokemon.speed}
      />
    ),
    moves: <PokemonMoves></PokemonMoves>,
    evolution: (
      <PokemonEvolution
        name={pokemon.evolution[0].species.name}
        url={pokemon.evolution[0].species.url}
      ></PokemonEvolution>
    ),
  };

  const setAboutTab = () => setCurrent("about");
  const setStatsTab = () => setCurrent("stats");
  const setMovesTab = () => setCurrent("moves");
  const setEvolutionTab = () => setCurrent("evolution");

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
                <ButtonTab onClick={setAboutTab}>About</ButtonTab>
              </TableCell>
              <TableCell>
                <ButtonTab onClick={setStatsTab}>Stats</ButtonTab>
              </TableCell>
              <TableCell>
                <ButtonTab onClick={setEvolutionTab}>Evolution</ButtonTab>
              </TableCell>
              <TableCell>
                <ButtonTab onClick={setMovesTab}>Moves</ButtonTab>
              </TableCell>
            </TableRow>
          </tbody>
        </TableNavbar>
        {Tabs[current]}
      </InfoTable>
    </Container>
  );
}
