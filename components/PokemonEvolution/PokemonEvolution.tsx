import React from "react";

interface PokemonEvolutionProps {
  name: string;
  url: string;
}

export default function PokemonEvolution(props: PokemonEvolutionProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
