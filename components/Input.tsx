import React, { FC } from "react";
import styled from "styled-components/native";
import { theme } from "../styles/Theme";

import {
    CustomInputStylesInterface,
    CustomInputInterface,
    CustomInputWithIconInterface,
} from "../types/components/input";
import { ContainerInputIcon } from "./View";

export const CustomInput: FC<CustomInputInterface> = styled.TextInput`
    height: 40px;
    border-radius: 10px;
    flex: 1;
    font-family: ${({ theme }: CustomInputStylesInterface) =>
        theme.font.family};
    font-size: ${({ theme }: CustomInputStylesInterface) =>
        theme.font.sizeSmaller};
    ${({ theme, spacing }: CustomInputStylesInterface) => {
        if (spacing) {
            return `
                padding: 0 ${theme.spacing.xlg};
                margin: 0 ${theme.spacing.xlg};
            `;
        } else {
            return `
                padding: 0 ${theme.spacing.xsm};
                margin: 0 ${theme.spacing.xsm};
            `;
        }
    }}
    background-color: ${({
        theme,
        backgroundColor,
    }: CustomInputStylesInterface) =>
        backgroundColor ? backgroundColor : theme.colors.transparent};
`;

export const CustomInputWithIcon: FC<CustomInputWithIconInterface> = ({
    StartIcon,
    ...rest
}) => {
    return (
        <ContainerInputIcon backgroundColor={theme.colors.greyLigth}>
            {StartIcon}
            <CustomInput backgroundColor={theme.colors.greyLigth} {...rest} />
        </ContainerInputIcon>
    );
};
