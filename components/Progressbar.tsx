import React, { FC } from "react";
import styled from "styled-components/native";

import { Paragraph } from "./Text";
import {
    ProgressInterface,
    ProgressStylesInterface,
    ProgressInfoInterface,
} from "../types/components/progressbar";

const ProgressbarRelative: FC = styled.View`
    position: relative;
    height: 15px;
    flex: 1;
    max-width: 80%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
    background-color: ${({ theme }: ProgressStylesInterface) =>
        theme.colors.greyLigth};
`;

const ProgressbarAbsolute: FC<ProgressInterface> = styled.View`
    position: absolute;
    height: 15px;
    left: 0;
    top: 0;
    width: ${({ percentage }: ProgressStylesInterface) =>
        percentage > 100 ? 100 : percentage < 0 ? 0 : percentage}%;
    background-color: ${({ theme }: ProgressStylesInterface) =>
        theme.colors.success};
`;

const ProgressbarMarker: FC<ProgressInterface> = styled.View`
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 3px;
    height: 30px;
    left: ${({ percentage }: ProgressStylesInterface) =>
        percentage > 100 ? 100 : percentage < 0 ? 0 : percentage}%;
    top: 0;
    border-width: 1px;
    border-color: ${({ theme }: ProgressStylesInterface) => theme.colors.grey3}
    transform: translate(${({ percentage }: ProgressStylesInterface) =>
        percentage > 90 ? "-30" : "-15"}px, -7.5px);
    padding: 1px 15px;
    background-color: ${({ theme }: ProgressStylesInterface) =>
        theme.colors.white};
`;

const Progressbar: FC<ProgressInterface> = ({ percentage }) => (
    <ProgressbarRelative>
        <ProgressbarAbsolute percentage={percentage} />
        <ProgressbarMarker percentage={percentage}>
            <Paragraph size={14}>{percentage}</Paragraph>
        </ProgressbarMarker>
    </ProgressbarRelative>
);

const ProgressContainer = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 20px;
`;

export const ProgressInfo: FC<ProgressInfoInterface> = ({
    label,
    percentage,
}) => {
    return (
        <ProgressContainer>
            <Paragraph size={14}>{label}</Paragraph>
            <Progressbar percentage={percentage} />
        </ProgressContainer>
    );
};

export default Progressbar;
