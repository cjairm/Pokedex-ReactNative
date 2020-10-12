import React, { FC, Fragment } from "react";
import { ThemeProvider } from "styled-components";

import { ThemeInterface, ThemeValues } from "../types/components/styles";

export const theme: ThemeValues = {
    colors: {
        primary: "rgb(193, 37, 42)",
        secondary: "rgb(57, 160, 237)",
        tertiary: "rgb(30, 30, 36)",
        success: "rgb(30, 70, 32)",
        black: "rgb(12, 9, 13)",
        greyLigth: "rgb(220, 220, 220)",
        grey1: "rgb(51, 51, 51)",
        grey2: "rgb(119, 119, 119)",
        grey3: "rgb(153, 153, 153)",
        white: "rgb(255, 255, 255)",
        transparent: "rgba(255, 255, 255, 0)",
    },
    font: {
        family: "open-sans",
        familyBold: "open-sans-bold",
        sizeSmallest: "14px",
        sizeSmaller: "16px",
        sizeDefault: "18px",
        sizeBigger: "20px",
        sizeBiggest: "22px",
    },
    spacing: {
        xsm: "5px",
        sm: "7px",
        m: "10px",
        lg: "13px",
        xlg: "15px",
    },
};

const Theme: FC<ThemeInterface> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>{children}</Fragment>
        </ThemeProvider>
    );
};

export default Theme;
