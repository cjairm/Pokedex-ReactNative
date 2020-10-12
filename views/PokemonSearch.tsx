import React, {
    FC,
    Fragment,
    useEffect,
    useContext,
    useCallback,
    ReactNode,
} from "react";
import { ScrollView } from "react-native";

import { ContainerView, ContainerRow, Activity } from "../components/View";
import { HeaderTitleImage } from "../components/Image";
import { CustomButton } from "../components/Button";
import Searcher from "../components/Searcher";
import PokemonList from "../components/Pokemon/PokemonList";
import AppContext from "../context/App";
import { getDataCall } from "../utils/calls";
import { Paragraph } from "../components/Text";

const PokemonSearch: FC = () => {
    const { dispatchGetData, dispatchIsLoading, appState } = useContext(
        AppContext
    );

    const getData = useCallback(async (url?: string) => {
        const res = await getDataCall(url);
        return res;
    }, []);

    const retrieve = useCallback(async (url?: string) => {
        dispatchIsLoading(true);
        getData(url).then((res) => {
            dispatchGetData(res);
            dispatchIsLoading(false);
        });
    }, []);

    useEffect(() => {
        retrieve();
    }, []);

    let content: ReactNode;
    if (appState.isLoading) {
        content = <Activity />;
    } else {
        if (appState.pokemons.length === 0) {
            content = (
                <ContainerView>
                    <Paragraph>Pokemon not found</Paragraph>
                </ContainerView>
            );
        } else {
            content = (
                <ContainerView>
                    <ContainerRow>
                        <PokemonList items={appState.pokemons} />
                    </ContainerRow>

                    <ContainerRow spacing spaceAround>
                        {appState.prevPage && (
                            <CustomButton
                                color="primary"
                                onPress={() => retrieve(appState.prevPage)}
                            >
                                Prev
                            </CustomButton>
                        )}
                        {appState.nextPage && (
                            <CustomButton
                                color="primary"
                                onPress={() => retrieve(appState.nextPage)}
                            >
                                Next
                            </CustomButton>
                        )}
                    </ContainerRow>
                </ContainerView>
            );
        }
    }

    return (
        <Fragment>
            <ScrollView>
                <Searcher />
                {content}
            </ScrollView>
        </Fragment>
    );
};

export const screenOptions = () => ({
    headerTitleAlign: "center",
    headerTitle: () => (
        <HeaderTitleImage source={require("../assets/pokemon.png")} />
    ),
});

export default PokemonSearch;
