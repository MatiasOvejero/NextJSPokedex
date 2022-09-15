import { TypeForBackground } from "../utils/backgroundColorSelector";

export interface MainPokemon {
  pokemon: Pokemon;
}
export interface Pokemon {
  name: string;
  image: string;
  types: PokemonType[];
  url: string;
  id: number;
  abilities: Abilities[];
  exp: number;
  height: number;
  weight: number;
  stats: Stat[];
  sprites: { front_default: string };
}

export const makePokemon = (pokemon: Partial<Pokemon>): Pokemon => {
  const defaultValue: Pokemon = {
    abilities: pokemon.abilities ? pokemon.abilities : [],
    exp: pokemon.exp ? pokemon.exp : 0,
    image: pokemon.image ? pokemon.image : "",
    height: pokemon.height ? pokemon.height : 0,
    id: pokemon.id ? pokemon.id : -1,
    name: pokemon.name ? pokemon.name : "",
    sprites: pokemon.sprites ? pokemon.sprites : { front_default: "" },
    stats: pokemon.stats ? pokemon.stats : [],
    types: pokemon.types ? pokemon.types : [],
    url: pokemon.url ? pokemon.url : "",
    weight: pokemon.weight ? pokemon.weight : 0,
  };

  return defaultValue;
};
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

export interface Abilities {
  ability: Ability;
}

export interface Ability {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: StatDetail;
}

export interface StatDetail {
  name: string;
  url: string;
}
