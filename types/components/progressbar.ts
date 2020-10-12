import { ThemeValues } from "../../types/components/styles";

export interface ProgressInterface {
    [key: string]: any;
    percentage: number;
}

export interface ProgressInfoInterface {
    [key: string]: any;
    label: string;
    percentage: number;
}

export interface ProgressStylesInterface extends ProgressInterface {
    theme: ThemeValues;
}
