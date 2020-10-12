import React, { FC } from "react";
import { TouchableOpacity } from "react-native";

import { ContainerPokemon } from "../View";
import { Paragraph } from "../Text";
import { PokemonImage } from "../Image";
import { PokemonItemInterface } from "../../types/components/pokemon";

const PokemonItem: FC<PokemonItemInterface> = ({ name, uri, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <ContainerPokemon>
                <PokemonImage
                    source={{
                        uri,
                    }}
                />
                <Paragraph>
                    {name
                        .split("")
                        .map((n, i) => {
                            if (i === 0) return n.toUpperCase();
                            else return n.toLowerCase();
                        })
                        .join("")}
                </Paragraph>
            </ContainerPokemon>
        </TouchableOpacity>
    );
};

export default PokemonItem;
