import React, { FC } from "react";
import styled from "styled-components/native";
import { ScrollView, Dimensions, ActivityIndicator } from "react-native";

import {
    MarginViewInterface,
    MarginViewStylesInterface,
} from "../types/components/view";

const windowHeight = Dimensions.get("screen").height;

export const MarginView: FC<MarginViewInterface> = styled.View`
    margin-top: ${({ theme }: MarginViewStylesInterface) => theme.spacing.xlg};
`;

export const ContainerView: FC<MarginViewInterface> = styled.View`
    flex: 1;
    padding: ${({ theme }: MarginViewStylesInterface) => theme.spacing.sm};
    padding-bottom: 0;
    margin-bottom: 0;
    background-color: ${({ theme }: MarginViewStylesInterface) =>
        theme.colors.greyLigth};
`;

export const ContainerSearch: FC<MarginViewInterface> = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: ${({ theme }: MarginViewStylesInterface) => theme.spacing.xsm}
        ${({ theme }: MarginViewStylesInterface) => theme.spacing.sm};
    background-color: ${({ theme }: MarginViewStylesInterface) =>
        theme.colors.white};
`;

export const ContainerInputIcon: FC<MarginViewInterface> = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 10px;
    padding: ${({ theme }: MarginViewStylesInterface) => theme.spacing.xlg};
    margin: 0 ${({ theme }: MarginViewStylesInterface) => theme.spacing.xlg};
    background-color: ${({
        theme,
        backgroundColor,
    }: MarginViewStylesInterface) =>
        backgroundColor ? backgroundColor : theme.colors.transparent};
`;

export const ContainerRow: FC<MarginViewInterface> = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    ${({ spaceAround }: MarginViewStylesInterface) => {
        if (spaceAround) return `justify-content: space-around;`;
        else return `justify-content: center;`;
    }}
    ${({ theme, spacing }: MarginViewStylesInterface) => {
        if (spacing)
            return `
            margin-top: ${theme.spacing.m};
            margin-bottom: ${theme.spacing.m};
        `;
    }}
`;

export const ContainerPokemon: FC = styled.View`
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    border-radius: 5px;
    margin: ${({ theme }: MarginViewStylesInterface) => theme.spacing.sm}
        ${({ theme }: MarginViewStylesInterface) => theme.spacing.xsm} 0
        ${({ theme }: MarginViewStylesInterface) => theme.spacing.xsm};
    background-color: ${({ theme }: MarginViewStylesInterface) =>
        theme.colors.white};
`;

export const PokemonDetailsView: FC = styled.View`
    flex: 1;
    border-radius: 2px;
    background-color: ${({ theme }: MarginViewStylesInterface) =>
        theme.colors.white};
`;

const ActivityContainer: FC = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Activity: FC = () => {
    return (
        <ActivityContainer>
            <ActivityIndicator size="large" />
        </ActivityContainer>
    );
};

const WelcomeView: FC<MarginViewInterface> = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    height: ${windowHeight / 2}px;
    padding: ${({ theme }: MarginViewStylesInterface) => theme.spacing.xlg};
`;

export const WelcomeContainer: FC = ({ children, ...rest }) => {
    return (
        <ScrollView {...rest}>
            <WelcomeView>{children}</WelcomeView>
        </ScrollView>
    );
};
