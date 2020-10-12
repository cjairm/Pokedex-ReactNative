import "react-native";
import React from "react";
import { render } from '@testing-library/react-native';

import PokemonList from "../../../components/Pokemon/PokemonList";

const pokemons = [
    {
        id: 39,
        name: "jigglypuff",
        uri: "https://pokeapi.co/api/v2/pokemon/39/",
    },
    {
        id: 40,
        name: "wigglytuff",
        uri: "https://pokeapi.co/api/v2/pokemon/40/",
    },
];

describe("<PokemonList />", () => {
    it("Rendering pokemons", () => {
        const t = render(<PokemonList items={pokemons} />);
    });
});