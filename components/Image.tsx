import React, { FC } from "react";
import styled from "styled-components/native";

import {
    CustomImageInterface,
    HeaderTitleImageInterface,
    PokemonImageInterface,
} from "../types/components/image";

export const CustomImage: FC<CustomImageInterface> = styled.Image`
    max-width: ${({ width }) => (width ? width : "100%")};
    max-height: ${({ height }) => (height ? height : "100%")};
`;

export const PokemonImage: FC<PokemonImageInterface> = styled.Image`
    height: 100px;
    width: 100px;
`;

const HeaderImage: FC<HeaderTitleImageInterface> = styled.Image`
    height: 40px;
    width: 110px;
`;

export const HeaderTitleImage: FC<HeaderTitleImageInterface> = ({
    source,
    ...rest
}) => <HeaderImage source={source} {...rest} />;
