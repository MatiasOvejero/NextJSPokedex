import React from "react";
import HasEvolution from "./HasEvolution";
import NoEvolution from "./NoEvolution";

interface PokemonEvolutionProps {}

export default function PokemonEvolution(props: PokemonEvolutionProps) {
  const evolutionData = props.evolutionsData;
  if (props.evolutionsData.length > 0) {
    return <HasEvolution data={evolutionData} />;
  }
  return <NoEvolution />;
}
