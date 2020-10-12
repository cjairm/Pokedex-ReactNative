import React, { FC } from "react";
import {
    createStackNavigator,
    StackNavigationOptions,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import PokemonWelcome, {
    screenOptions as PokemonWelcomeScreenOptions,
} from "../views/PokemonWelcome";
import PokemonSearch, {
    screenOptions as PokemonSearchScreenOptions,
} from "../views/PokemonSearch";
import PokemonDetails, {
    screenOptions as PokemonDetailsScreenOptions,
} from "../views/PokemonDetails";
import { theme } from "../styles/Theme";

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: theme.colors.primary,
    },
    headerTitleStyle: {
        fontFamily: theme.font.familyBold,
    },
    headerBackTitleStyle: {
        fontFamily: theme.font.family,
    },
    headerTintColor: theme.colors.white,
};

const PokemonStackNavigator = createStackNavigator();

export const PokemonNavigator: FC = () => {
    return (
        <PokemonStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <PokemonStackNavigator.Screen
                name="PokemonWelcome"
                component={PokemonWelcome}
                options={PokemonWelcomeScreenOptions as StackNavigationOptions}
            />
            <PokemonStackNavigator.Screen
                name="PokemonSearch"
                component={PokemonSearch}
                options={PokemonSearchScreenOptions as StackNavigationOptions}
            />
            <PokemonStackNavigator.Screen
                name="PokemonDetails"
                component={PokemonDetails}
                options={PokemonDetailsScreenOptions as StackNavigationOptions}
            />
        </PokemonStackNavigator.Navigator>
    );
};

const MainNavigation: FC = () => {
    return (
        <NavigationContainer>
            <PokemonNavigator />
        </NavigationContainer>
    );
};

export default MainNavigation;
