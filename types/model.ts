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
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  species: SpeciesUrl;
  speed: number;
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
    hp: pokemon.hp ? pokemon.hp : 0,
    attack: pokemon.attack ? pokemon.attack : 0,
    defense: pokemon.defense ? pokemon.defense : 0,
    speed: pokemon.speed ? pokemon.speed : 0,
    species: pokemon.species ? pokemon.species : { url: "" },
    special_attack: pokemon.special_attack ? pokemon.special_attack : 0,
    special_defense: pokemon.special_defense ? pokemon.special_defense : 0,
  };

  return defaultValue;
};

export interface SpeciesUrl {
  url: string;
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
