import { ThemeValues } from "../../types/components/styles";

export interface ParagraphInterface {
    bold?: boolean;
    size?: number;
    color?: "primary" | "secondary" | "black" | "white";
    center?: boolean;
}

export interface LabeledTextInterface {
    label: string;
    value: string;
}

export interface TitleInterface {
    color?: "primary" | "secondary" | "black" | "white";
}

export interface ParagraphStylesInterface extends ParagraphInterface{
    theme: ThemeValues;
}
