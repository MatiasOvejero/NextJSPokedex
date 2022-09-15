import React from "react";
import { Pokemon } from "../../types/model";
import { AboutContainer, DataContainer, AboutTable, InfoName, DatabaseData } from "./PokemonAbout.styled";

interface Props {
  exp: number;
  height: number;
  weight: number;
}

export default function PokemonAbout(props: Props) {
  return (
    <AboutTable>
      <AboutContainer>
        <DataContainer>
          <InfoName>Base Experience</InfoName>
          <DatabaseData>{props.exp}</DatabaseData>
        </DataContainer>
        <DataContainer>
          <InfoName>Height</InfoName>
          <DatabaseData>{props.height}</DatabaseData>
        </DataContainer>
        <DataContainer>
          <InfoName>Weight</InfoName>
          <DatabaseData>{props.weight}</DatabaseData>
        </DataContainer>
        {/* <div>Habilidades: {props.abilities}</div> */}
      </AboutContainer>
    </AboutTable>
  );
}
