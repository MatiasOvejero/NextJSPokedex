import React from "react";

export default function PokemonAbout(props) {
  console.log("🚀 ~ file: PokemonAbout.tsx ~ line 4 ~ PokemonAbout ~ props", props);
  console.log(props.species);
  return (
    <div id="Container">
      <div>asd{props.exp}</div>
      <div>{props.height}</div>
      <div>{props.weight}</div>
      <div>{props.abilities}</div>
    </div>
  );
}
