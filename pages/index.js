import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";
import styled from "styled-components";
import { PokedexCard } from "../components/PokedexCard";
import { Pokedex } from "../components/Pokedex.styled";

export async function getServerSideProps() {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon/");

  const pokemonList = await resp.json();

  const list = await Promise.all(
    pokemonList.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      return await response.json();
    })
  );

  const dataList = list.map((pokemon) => ({
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

export default function Home({ pokemonList }) {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/pokeball.png" />
      </Head>

      <main>
        <Pokedex>
          {pokemonList.map((pokemon, index) => (
            <PokedexCard id={index} pokemon={pokemon} />
          ))}
        </Pokedex>
      </main>
    </div>
  );
}
