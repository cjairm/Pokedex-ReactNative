import React, { FC } from "react";
import styled from "styled-components/native";

import {
    ParagraphInterface,
    ParagraphStylesInterface,
    TitleInterface,
    LabeledTextInterface,
} from "../types/components/text";

export const Paragraph: FC<ParagraphInterface> = styled.Text`
    color: ${({ theme, color }: ParagraphStylesInterface) =>
        color === "white"
            ? theme.colors.white
            : color === "primary"
            ? theme.colors.primary
            : color === "secondary"
            ? theme.colors.secondary
            : theme.colors.black};
    font-family: ${({ theme, bold }: ParagraphStylesInterface) =>
        bold ? theme.font.familyBold : theme.font.family};
    font-size: ${({ theme, size }: ParagraphStylesInterface) =>
        size ? size + "px" : theme.font.sizeDefault};
    text-align: ${({ center }) => (center ? "center" : "left")};
`;

export const Title: FC<TitleInterface> = styled.Text`
    color: ${({ theme, color }: ParagraphStylesInterface) =>
        color === "white"
            ? theme.colors.white
            : color === "primary"
            ? theme.colors.primary
            : color === "secondary"
            ? theme.colors.secondary
            : theme.colors.black};
    font-family: ${({ theme }: ParagraphStylesInterface) =>
        theme.font.familyBold};
    font-size: ${({ theme }: ParagraphStylesInterface) =>
        theme.font.sizeBigger};
`;

const LabeledContainer = styled.View`
    flex-direction: row;
`;

export const LabeledText: FC<LabeledTextInterface> = ({ label, value }) => {
    return (
        <LabeledContainer>
            <Paragraph size={14} bold>
                {label}:{" "}
            </Paragraph>
            <Paragraph size={14}>{value}</Paragraph>
        </LabeledContainer>
    );
};
