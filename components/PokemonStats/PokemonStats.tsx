import React from "react";
import {
  AttackBarProgress,
  BarContainer,
  DefenseBarProgress,
  HpBarProgress,
  SABarProgress,
  SDBarProgress,
  SpeedBarProgress,
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
          <HpBarProgress barWidth={props.hp}></HpBarProgress>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <StatName>Attack </StatName>
        <StatValue>{props.attack}</StatValue>
        <BarContainer>
          <AttackBarProgress barWidth={props.attack}></AttackBarProgress>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <StatName>Defense </StatName>
        <StatValue>{props.defense}</StatValue>
        <BarContainer>
          <DefenseBarProgress barWidth={props.defense}></DefenseBarProgress>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <StatName>Speed </StatName>
        <StatValue>{props.speed}</StatValue>
        <BarContainer>
          <SpeedBarProgress barWidth={props.speed}></SpeedBarProgress>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <StatName>Special attack </StatName>
        <StatValue>{props.special_attack}</StatValue>
        <BarContainer>
          <SABarProgress barWidth={props.special_attack}></SABarProgress>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <StatName>Special defense </StatName>
        <StatValue>{props.special_defense}</StatValue>
        <BarContainer>
          <SDBarProgress barWidth={props.special_defense}></SDBarProgress>
        </BarContainer>
      </StatContainer>
    </StatScreen>
  );
}
