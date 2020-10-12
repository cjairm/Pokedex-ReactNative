import React, {
    FC,
    useCallback,
    useEffect,
    useContext,
    useState,
    ReactNode,
} from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import {
    ContainerView,
    PokemonDetailsView,
    MarginView,
    Activity,
} from "../components/View";
import { Paragraph, Title, LabeledText } from "../components/Text";
import { HeaderTitleImage } from "../components/Image";
import { PokemonDetailsRoute } from "../types/navigation/main";
import { PokemonImage } from "../components/Image";
import { ProgressInfo } from "../components/Progressbar";
import { getDataCall, getPokemonDetailsCall } from "../utils/calls";
import { binarySearch } from "../utils/api";
import AppContext from "../context/App";
import { pokemonType } from "../types/models";

const NameContainer = styled.View`
    margin-left: 10px;
`;

const InfoContainer = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const GeneralContainer = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    padding-left: 10px;
`;

const LineView = styled.View`
    border-width: 0.5px;
    border-color: ${({ theme }: any) => theme.colors.greyLigth};
    margin: 10px;
    flex: 1;
`;

const PokemonDetails: FC = () => {
    const { dispatchGetPokemon, dispatchIsLoading, appState } = useContext(
        AppContext
    );

    const route = useRoute<PokemonDetailsRoute>();
    const pokemonId = route.params.pokemonId;
    const [currPokemon, setCurrPokemon] = useState<pokemonType | null>(null);
    const currPokemonPos = binarySearch(appState.pokemons, pokemonId);

    const getData = useCallback(async (id: number) => {
        const res = await getDataCall(id.toString());
        const resDetails = await getPokemonDetailsCall(id);
        return {
            pokemon: res,
            details: resDetails,
        };
    }, []);

    const retrieve = useCallback(async () => {
        dispatchIsLoading(true);
        getData(pokemonId).then((res) => {
            dispatchGetPokemon(res);
            dispatchIsLoading(false);
        });
    }, [pokemonId]);

    useEffect(() => {
        retrieve();

        return () => setCurrPokemon(null);
    }, []);

    useEffect(() => {
        if (currPokemonPos !== -1) {
            const pokemon = appState.pokemons[currPokemonPos];
            setCurrPokemon(pokemon);
        }
    }, [currPokemonPos]);

    if (appState.isLoading) return <Activity />;

    let statView: ReactNode[] = [];
    if (currPokemon && currPokemon.details && currPokemon.details.stats) {
        const stats = currPokemon.details.stats;
        for (let stat in stats) {
            statView.push(
                <ProgressInfo
                    key={stat}
                    label={stat}
                    percentage={currPokemon.details.stats[stat]}
                />
            );
        }
    }

    return (
        <ContainerView>
            <ScrollView>
                <PokemonDetailsView>
                    <InfoContainer>
                        <PokemonImage
                            source={{
                                uri: currPokemon?.uri,
                            }}
                        />
                        <NameContainer>
                            <Paragraph size={14}>
                                {currPokemon
                                    ? currPokemon.id < 10
                                        ? "#00" + currPokemon.id
                                        : currPokemon.id < 100
                                        ? "#0" + currPokemon.id
                                        : "#" + currPokemon.id
                                    : "error"}
                            </Paragraph>
                            <Title>
                                {currPokemon
                                    ? currPokemon.name
                                          .split("")
                                          .map((n: any, i: number) => {
                                              if (i === 0)
                                                  return n.toUpperCase();
                                              else return n.toLowerCase();
                                          })
                                          .join("")
                                    : "Error"}
                            </Title>
                            {currPokemon && currPokemon.details ? (
                                <LabeledText
                                    label="Height"
                                    value={currPokemon.details.height + "m"}
                                />
                            ) : null}

                            {currPokemon && currPokemon.details ? (
                                <LabeledText
                                    label="Weight"
                                    value={currPokemon.details.weight + "kg"}
                                />
                            ) : null}
                        </NameContainer>
                    </InfoContainer>

                    {currPokemon && currPokemon.details ? (
                        <GeneralContainer>
                            <Paragraph center size={14}>
                                {currPokemon.details.description}
                            </Paragraph>
                        </GeneralContainer>
                    ) : null}

                    <MarginView />

                    <GeneralContainer>
                        <LineView />
                        <Paragraph center size={12}>
                            STATISTICS
                        </Paragraph>
                        <LineView />
                    </GeneralContainer>

                    <MarginView />

                    {statView}

                    <MarginView />
                </PokemonDetailsView>
            </ScrollView>
        </ContainerView>
    );
};

export const screenOptions = () => ({
    headerTitleAlign: "center",
    headerTitle: () => (
        <HeaderTitleImage source={require("../assets/pokemon.png")} />
    ),
});

export default PokemonDetails;
