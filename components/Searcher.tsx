import React, { FC, useContext, useState, useCallback, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import { ContainerSearch } from "./View";
import { CustomInputWithIcon } from "./Input";
import { CustomButton } from "./Button";
import { theme } from "../styles/Theme";
import AppContext from "../context/App";
import { getDataCall } from "../utils/calls";
import { pokemonType } from "../types/models";

const Searcher: FC = ({}) => {
    let timeout: any = null;
    const [searchText, setSearchText] = useState<string>("");
    const { dispatchIsLoading, appState, dispatchGetData } = useContext(
        AppContext
    );

    const getData = useCallback(async () => {
        const limit = appState.total > 0 ? appState.total : 10000;
        const res = await getDataCall(
            `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`
        );
        return res;
    }, []);

    useEffect(() => {
        if (timeout !== null) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            dispatchIsLoading(true);

            if (searchText !== "") {
                getData().then((res) => {
                    const updateData = res.results.filter(
                        (p: pokemonType) =>
                            p.id === +searchText ||
                            p.name === searchText ||
                            p.name.includes(searchText)
                    );
                    dispatchGetData({
                        total: res.count,
                        next: null,
                        previous: null,
                        results: updateData,
                    });
                    dispatchIsLoading(false);
                });
            } else {
                getDataCall().then((res) => {
                    dispatchGetData(res);
                    dispatchIsLoading(false);
                });
            }
        }, 500);
    }, [searchText]);

    return (
        <ContainerSearch>
            <CustomInputWithIcon
                StartIcon={
                    <Ionicons
                        name="ios-search"
                        size={20}
                        color={theme.colors.grey1}
                    />
                }
                placeholder="Search"
                placeholderTextColor={theme.colors.grey1}
                onChangeText={(text: string) => setSearchText(text)}
                value={searchText}
            />
            {searchText !== "" && (
                <CustomButton onPress={() => setSearchText("")}>
                    Cancel
                </CustomButton>
            )}
        </ContainerSearch>
    );
};

export default Searcher;
