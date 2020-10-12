import { pokemonType } from "../models";

export interface PokemonItemInterface {
    name: string;
    uri: string;
    onPress: (...args: any) => any;
}

export interface PokemonListInterface {
    items: pokemonType[];
}
