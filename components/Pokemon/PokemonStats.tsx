import React from "react";
import { BarContainer, BarProgress, StatContainer } from "./PokemonStats.styled";

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
    <>
      <StatContainer>
        <span>hp {props.hp}</span>
        <BarContainer>
          <BarProgress></BarProgress>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <div>attack {props.attack}</div>
        <BarContainer>
          <BarProgress></BarProgress>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <div>defense {props.defense}</div>
        <BarContainer>
          <BarProgress></BarProgress>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <div>speed {props.speed}</div>
        <BarContainer>
          <BarProgress></BarProgress>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <div>Special attack {props.special_attack}</div>
        <BarContainer>
          <BarProgress></BarProgress>
        </BarContainer>
      </StatContainer>
      <StatContainer>
        <div>special defense {props.special_defense}</div>
        <BarContainer>
          <BarProgress></BarProgress>
        </BarContainer>
      </StatContainer>
    </>
  );
}
