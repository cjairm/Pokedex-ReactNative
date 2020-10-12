import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PokemonList from "../../../components/Pokemon/PokemonList";
import PokemonItem from "../../../components/Pokemon/PokemonItem";

configure({ adapter: new Adapter() });

describe("<PokemonList />", () => {
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

    it("Rendering pokemons", () => {
        const wrapper = shallow(<PokemonList items={pokemons} />);
        expect(wrapper.find(PokemonItem)).toHaveLength(2);
    });
});
