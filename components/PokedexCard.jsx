import React from "react";
import {
  CardContainer,
  Image,
  InfoContainer,
  Name,
  Type,
  TypeContainer,
  ImageContainer,
  MainImage,
} from "./PokedexCard.styled";

export const PokedexCard = ({ pokemon }) => {
  console.log(pokemon);
  const mainType = pokemon.types[0].type.name;
  return (
    <>
      <CardContainer type={mainType}>
        <InfoContainer>
          <Name>{pokemon.name}</Name>
          {pokemon.types.map((types) => (
            <Type>{types.type.name}</Type>
          ))}
        </InfoContainer>
        <ImageContainer>
          <MainImage src={pokemon.image} />
          <Image src="pokeball-transparent.png" />
        </ImageContainer>
      </CardContainer>
    </>
  );
};
