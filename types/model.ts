import { TypeForBackground } from "../utils/backgroundColorSelector";

export interface MainPokemon {
  pokemon: Pokemon;
}
export interface Pokemon {
  name: string;
  image: string;
  types: PokemonType[];
  number: number;
  url: string;
  sprites: spriteUrl;
  id: number;
  abilities: abilities;
  exp: number;
  height: number;
  weight: number;
}

export interface spriteUrl {
  front_default: string;
}

export interface PokemonType {
  type: PokemonTypeItem;
}

export interface PokemonTypeItem {
  name: TypeForBackground;
  url: string;
}

export interface abilities {
  ability: ability[];
}

export interface ability {
  name: string;
  url: string;
}
