import { ReactNode } from "react";

enum colorsName {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
    success = "success",
    black = "black",
    greyLigth = "greyLigth",
    grey1 = "grey1",
    grey2 = "grey2",
    grey3 = "grey3",
    white = "white",
    transparent = "transparent",
}
enum fontNames {
    family = "family",
    familyBold = "familyBold",
    sizeSmallest = "sizeSmallest",
    sizeSmaller = "sizeSmaller",
    sizeDefault = "sizeDefault",
    sizeBigger = "sizeBigger",
    sizeBiggest = "sizeBiggest",
}

enum spacingNames {
    xsm = "xsm",
    sm = "sm",
    m = "m",
    lg = "lg",
    xlg = "xlg",
}

export interface ThemeInterface {
    children: NonNullable<ReactNode>;
}

export interface ThemeValues {
    colors: { [key in colorsName]: string };
    font: { [key in fontNames]: string };
    spacing: { [key in spacingNames]: string };
}
