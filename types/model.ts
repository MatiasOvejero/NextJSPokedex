import { TypeForBackground } from "../utils/backgroundColorSelector";

export interface MainPokemon {
  pokemon: Pokemon;
}
export interface Pokemon {
  name: string;
  image: string;
  types: PokemonType[];
  evolutions: EvolutionChain[];
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
  species: Species;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export const makePokemon = (pokemon: Partial<Pokemon>): Pokemon => {
  const defaultValue: Pokemon = {
    abilities: pokemon.abilities ? pokemon.abilities : [],
    exp: pokemon.exp ? pokemon.exp : 0,
    evolutions: pokemon.evolutions ? pokemon.evolutions : [],
    height: pokemon.height ? pokemon.height : 0,
    image: pokemon.image ? pokemon.image : "",
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
    species: pokemon.species ? pokemon.species : { name: "", url: "" },
    speed: pokemon.speed ? pokemon.speed : 0,
    special_attack: pokemon.special_attack ? pokemon.special_attack : 0,
    special_defense: pokemon.special_defense ? pokemon.special_defense : 0,
  };

  return defaultValue;
};

export interface Evolution {
  evolution_details: {
    gender: string;
    held_item: string;
    item: string;
    known_move: string;
    known_move_type: string;
  }[];
  evolves_to: Evolution[];
  is_baby: boolean;
  species: Species;
}

export interface Species {
  name: string;
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

export interface EvolutionsData {
  evolutionsData: EvolutionChain[];
}

export interface EvolutionChain {
  name: string;
  text: string;
  image: string;
}
