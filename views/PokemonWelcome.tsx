import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";

import { Title } from "../components/Text";
import { CustomButton } from "../components/Button";
import { MarginView, WelcomeContainer } from "../components/View";

const PokemonWelcome: FC = () => {
    const navigation = useNavigation();

    const navigationReplace = (route: string) => () => {
        navigation.reset({
            index: 0,
            routes: [{ name: route }],
        });
    };

    return (
        <WelcomeContainer>
            <Title>Pick a language</Title>
            <MarginView />
            <CustomButton
                activeOpacity={0.6}
                color="primary"
                width={50}
                onPress={navigationReplace("PokemonSearch")}
            >
                English
            </CustomButton>
            <MarginView />
            <CustomButton
                activeOpacity={0.6}
                color="primary"
                width={50}
                onPress={navigationReplace("PokemonSearch")}
            >
                Español
            </CustomButton>
        </WelcomeContainer>
    );
};

export const screenOptions = () => ({
    headerShown: false,
});

export default PokemonWelcome;
