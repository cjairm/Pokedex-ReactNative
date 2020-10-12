import React, { FC, Fragment } from "react";
import { useNavigation } from "@react-navigation/native";

import PokemonItem from "./PokemonItem";
import { pokemonType } from "../../types/models";
import { PokemonListInterface } from "../../types/components/pokemon";

const PokemonList: FC<PokemonListInterface> = ({ items }) => {
    const navigation = useNavigation();

    return (
        <Fragment>
            {items.map((item: pokemonType) => (
                <PokemonItem
                    key={item.id}
                    name={item.name}
                    uri={item.uri}
                    onPress={() =>
                        navigation.navigate("PokemonDetails", {
                            pokemonId: item.id,
                        })
                    }
                />
            ))}
        </Fragment>
    );
};

export default PokemonList;
