import React, { FC, useReducer, createContext } from "react";

import {
    ComponentProps,
    ActionTypes,
    initialStateType,
} from "../types/appContext";
import { pokemonType, responseType, pokemonDetailsType } from "../types/models";
import { createPokemonObj, getEn, binarySearch } from "../utils/api";

const AppContext = createContext(null as any);

const initialState: initialStateType = {
    pokemons: [],
    isLoading: false,
    total: 0,
    nextPage: null,
    prevPage: null,
};

const reducer = (
    state: initialStateType,
    action: {
        type: ActionTypes;
        payload?: any;
    }
) => {
    switch (action.type) {
        case "GET_DATA":
            return getData(state, action.payload);
        case "GET_POKEMON":
            return getPokemon(state, action.payload);
        case "IS_LOADING":
            return isLoading(state, action.payload);
        default:
            return state;
    }
};

export const AppProvider: FC<ComponentProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider
            value={{
                appState: state,
                dispatchGetData: (arr: pokemonType[]) =>
                    dispatch({ type: "GET_DATA", payload: arr }),
                dispatchIsLoading: (flag: boolean) =>
                    dispatch({ type: "IS_LOADING", payload: flag }),
                dispatchGetPokemon: (data: any) =>
                    dispatch({ type: "GET_POKEMON", payload: data }),
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const getData = (
    state: initialStateType,
    response: responseType
): initialStateType => {
    return {
        ...state,
        pokemons: createPokemonObj(response) as [],
        total: response.count,
        nextPage: response.next,
        prevPage: response.previous,
    };
};

const getPokemon = (
    state: initialStateType,
    response: any
): initialStateType => {
    const updatedPokemons = [...state.pokemons];
    const description = response.details.flavor_text_entries;
    const stats: { [key: string]: any } = {};
    for (let i = 0; i < response.pokemon.stats.length; i++) {
        const stat: any = response.pokemon.stats[i];
        let statName;
        switch (stat.stat.name) {
            case "special-attack":
                statName = "Sp Atk";
                break;

            case "special-defense":
                statName = "Sp Def";
                break;

            default:
                statName = stat.stat.name
                    .split("")
                    .map((n: any, i: number) => {
                        if (i === 0) return n.toUpperCase();
                        else return n.toLowerCase();
                    })
                    .join("");
                break;
        }
        stats[statName] = stat.base_stat;
    }
    const pokemonInfo: pokemonDetailsType = {
        height: response.pokemon.height / 10,
        weight: response.pokemon.weight / 10,
        description:
            description.length === 0
                ? "No description"
                : getEn(description).flavor_text,
        stats: stats,
    };
    const pokemonPos: number = binarySearch(
        updatedPokemons,
        response.pokemon.id
    );
    updatedPokemons[pokemonPos].details = pokemonInfo;
    updatedPokemons[
        pokemonPos
    ].uri = `https://pokeres.bastionbot.org/images/pokemon/${response.pokemon.id}.png`;
    return {
        ...state,
        pokemons: updatedPokemons,
    };
};

const isLoading = (
    state: initialStateType,
    flag: boolean
): initialStateType => {
    return {
        ...state,
        isLoading: flag,
    };
};

export default AppContext;
