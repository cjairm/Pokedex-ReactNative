import React, { FC } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import {
    CustomButtonInterface,
    ButtonStylesInterface,
} from "../types/components/button";
import { Paragraph } from "./Text";

const ButtonContainer = styled.View`
    background-color: ${({ theme, color }: ButtonStylesInterface) =>
        color === "default"
            ? theme.colors.transparent
            : color === "primary"
            ? theme.colors.primary
            : color === "secondary"
            ? theme.colors.secondary
            : theme.colors.transparent};
    padding: 10px 20px;
    border-radius: 25px;
    ${({ width }) => {
        if (width) {
            return `
                min-width: ${width}%;
                justify-content: center;
                align-items: center;
            `;
        } else {
            return null;
        }
    }};
`;

export const CustomButton: FC<CustomButtonInterface> = ({
    onPress,
    activeOpacity,
    color,
    children,
    width,
    ...rest
}) => {
    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={onPress}
            {...rest}
        >
            <ButtonContainer color={color} width={width}>
                <Paragraph
                    color={
                        color === "primary" || color === "secondary"
                            ? "white"
                            : "black"
                    }
                    bold
                >
                    {children}
                </Paragraph>
            </ButtonContainer>
        </TouchableOpacity>
    );
};
