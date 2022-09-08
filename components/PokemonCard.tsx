import React from "react";
import Link from "next/link";
import {
  BasicInfo,
  Container,
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
} from "./PokemonCard.styled";
import { MainPokemon } from "../types/model";
import PokemonAbout from "./PokemonAbout";

export default function PokemonCard({ pokemon }: MainPokemon) {
  const mainType: TypeForBackground = pokemon.types[0].type.name;
  return (
    <Container type={mainType}>
      <InfoContainer>
        <TopNav>
          <div>←</div>
          <div>♥</div>
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
          <IdContainer># {pokemon.number}</IdContainer>
        </BasicInfo>
        <Image src={pokemon.image} />
      </InfoContainer>
      <InfoTable>
        <TableNavbar>
          <TableRow>
            <TableCell type={mainType}>About</TableCell>
            <TableCell type={mainType}>Stats</TableCell>
            <TableCell type={mainType}>Evolution</TableCell>
            <TableCell type={mainType}>Moves</TableCell>
          </TableRow>
        </TableNavbar>
        <PokemonAbout></PokemonAbout>
      </InfoTable>
    </Container>
  );
}
