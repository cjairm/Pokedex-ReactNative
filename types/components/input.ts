import { ReactNode } from "react";
import { ThemeValues } from "../../types/components/styles";

export interface CustomInputInterface {
    [key: string]: any;
    backgroundColor?: string;
    spacing?: boolean;
}

export interface CustomInputWithIconInterface {
    [key: string]: any;
    StartIcon?: ReactNode;
}

export interface CustomInputStylesInterface extends CustomInputInterface{
    theme: ThemeValues;
}
