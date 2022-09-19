import Head from "next/head";
import Link from "next/link";
import Card from "./pokedex/[pokemon].page";
import React from "react";
import styled from "styled-components";
import { PokedexCard } from "../components/PokedexCard/PokedexCard";
import { Pokedex } from "./index.styled";
import { Pokemon } from "../types/model";
import PokemonCard from "./pokedex/[pokemon].page";
import { Anchor } from "./pokedex/[pokemon].styled";

export async function getServerSideProps() {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon/");

  const pokemonList = await resp.json();

  const list = await Promise.all(
    pokemonList.results.map(async (pokemon: Pokemon) => {
      const response = await fetch(pokemon.url);
      return await response.json();
    })
  );

  const dataList = list.map((pokemon: Pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    types: pokemon.types,
    number: pokemon.id,
  }));

  return {
    props: {
      pokemonList: dataList,
    },
  };
}

interface HomeProps {
  pokemonList: Pokemon[];
}

export default function Home({ pokemonList }: HomeProps) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link href="dist/output.css" rel="stylesheet"></link>
        <link rel="icon" href="/pokeball.png" />
      </Head>

      <main>
        <Pokedex>
          {pokemonList.map((pokemon: Pokemon, index: number) => (
            <Link
              href={{
                pathname: `/pokedex/${pokemon.name}`,
              }}
            >
              <Anchor>
                <PokedexCard key={index} pokemon={pokemon} />
              </Anchor>
            </Link>
          ))}
        </Pokedex>
      </main>
    </>
  );
}
