import React from "react";
import { AboutContainer, td, DataContainer, AboutTable, InfoName, DatabaseData } from "./PokemonAbout.styled";

export default function PokemonAbout(props) {
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
