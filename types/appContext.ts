import { pokemonType } from "./models";

export interface ComponentProps {
    children?: any;
}

export type ActionTypes = "IS_LOADING" | "GET_DATA" | "GET_POKEMON";

export interface initialStateType {
    pokemons: pokemonType[];
    isLoading: boolean;
    total: number;
    nextPage: string | null;
    prevPage: string | null;
}
