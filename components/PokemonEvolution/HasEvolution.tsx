import React from "react";
import {
  EvolutionCard,
  EvolutionContainer,
  EvolutionImage,
  EvolutionName,
  EvolutionText,
} from "./PokemonEvolution.styled";

interface Props {
  data: Info[];
}

interface Info {
  name: string;
  text: string;
  image: string;
}

export default function hasEvolution(props: Props) {
  return (
    <EvolutionContainer>
      {props.data.map((pokemon, index) => (
        <EvolutionCard key={index}>
          <EvolutionName>{pokemon.name}</EvolutionName>
          <EvolutionText>{pokemon.text}</EvolutionText>
          <EvolutionImage src={pokemon.image}></EvolutionImage>
        </EvolutionCard>
      ))}
    </EvolutionContainer>
  );
}
