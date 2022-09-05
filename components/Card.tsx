import React from "react";
import Link from "next/link";
import {
  BasicInfo,
  Container,
  IdContainer,
  Image,
  InfoContainer,
  Name,
  Table,
  Type,
  TypeAndNameContainer,
  TypeContainer,
} from "./Card.styled";

export default function Card({ pokemon }) {
  return (
    <Container>
      <InfoContainer>
        <BasicInfo>
          <TypeAndNameContainer>
            <Name>{pokemon.name}</Name>
            <TypeContainer>
              {pokemon.types.map((types) => (
                <Type>{types.type.name}</Type>
              ))}
            </TypeContainer>
          </TypeAndNameContainer>
          <IdContainer>#{pokemon.number}</IdContainer>
        </BasicInfo>
        <Image src={pokemon.image} />
      </InfoContainer>
      <Table></Table>
    </Container>
  );
}
