import { ReactNode } from "react";

import { ThemeValues } from "../../types/components/styles";

type ButtonColorType = "primary" | "secondary" | "default";

export interface CustomButtonInterface {
    [key: string]: any;
    children: NonNullable<ReactNode>;
    onPress?: (...args: any) => any;
    activeOpacity?: number;
    color?: ButtonColorType;
    width?: number;
}

export interface ButtonStylesInterface {
    theme: ThemeValues;
    color?: ButtonColorType;
    width?: number;
}
