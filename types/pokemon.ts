export interface Pokemon {
  name: string;
  image: string;
  types: PokemonType[];
  number: number;
}

export interface PokemonType {
  name: string;
}
