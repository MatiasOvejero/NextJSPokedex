import Head from "next/head";
import Link from "next/link";
import Card from "../components/PokemonCard";
import React from "react";
import styled from "styled-components";
import { PokedexCard } from "../components/PokedexCard";
import { Pokedex } from "../components/Pokedex.styled";
import { Pokemon } from "../types/model";

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
    number: pokemon.number,
  }));
  console.log("🚀 ~ file: index.page.tsx ~ line 28 ~ dataList ~ dataList", dataList);

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
            <PokedexCard key={index} pokemon={pokemon} />
          ))}
        </Pokedex>
      </main>
    </>
  );
}
