import React from "react";
import { MainPokemon, Pokemon, PokemonType, PokemonTypeItem } from "../../types/model";
import { TypeForBackground } from "../../utils/backgroundColorSelector";
import { CardContainer, Image, InfoContainer, Name, Type, ImageContainer, MainImage } from "./PokedexCard.styled";

export const PokedexCard = ({ pokemon }: MainPokemon) => {
  const mainType: TypeForBackground = pokemon.types[0].type.name;
  return (
    <CardContainer type={mainType}>
      <InfoContainer>
        <Name>{pokemon.name}</Name>
        {pokemon.types.map((types, index) => (
          <Type key={index} type={types.type.name}>
            {types.type.name}
          </Type>
        ))}
      </InfoContainer>
      <ImageContainer>
        <MainImage src={pokemon.image} />
        <Image src="pokeball-transparent.png" />
      </ImageContainer>
    </CardContainer>
  );
};
