import React from "react";
import {
  Attack,
  BarContainer,
  Defense,
  HP,
  SpecialAttack,
  SpecialDefense,
  Speed,
  StatContainer,
  StatName,
  StatScreen,
  StatValue,
} from "./PokemonStats.styled";

interface Props {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  special_attack: number;
  special_defense: number;
}

export default function PokemonStats(props: Props) {
  return (
    <StatScreen>
      <StatContainer>
        <StatName>HP </StatName>
        <StatValue>{props.hp}</StatValue>
        <BarContainer>
          <HP></HP>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <StatName>attack </StatName>
        <StatValue>{props.attack}</StatValue>
        <BarContainer>
          <Attack></Attack>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <StatName>defense </StatName>
        <StatValue>{props.defense}</StatValue>
        <BarContainer>
          <Defense></Defense>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <StatName>speed </StatName>
        <StatValue>{props.speed}</StatValue>
        <BarContainer>
          <Speed></Speed>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <StatName>Special attack </StatName>
        <StatValue>{props.special_attack}</StatValue>
        <BarContainer>
          <SpecialAttack></SpecialAttack>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <StatName>special defense </StatName>
        <StatValue>{props.special_defense}</StatValue>
        <BarContainer>
          <SpecialDefense></SpecialDefense>
        </BarContainer>
      </StatContainer>
    </StatScreen>
  );
}
