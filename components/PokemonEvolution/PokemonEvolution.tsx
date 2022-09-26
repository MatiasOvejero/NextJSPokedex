import React from "react";
import { EvolutionChain } from "../../types/model";
import HasEvolution from "./HasEvolution";
import NoEvolution from "./NoEvolution";

interface PokemonEvolutionProps {
  evolutions: EvolutionChain[];
}

export default function PokemonEvolution(props: PokemonEvolutionProps) {
  const evolutionData = props.evolutions;
  if (props.evolutions.length > 0) {
    return <HasEvolution data={evolutionData} />;
  }
  return <NoEvolution />;
}
