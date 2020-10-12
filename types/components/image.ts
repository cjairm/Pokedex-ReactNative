import { ThemeValues } from "../../types/components/styles";

export interface CustomImageInterface {
    [key: string]: any;
    width?: number;
    height?: number;
}

export interface HeaderTitleImageInterface {
    [key: string]: any;
    source: any;
}

export interface PokemonImageInterface {
    [key: string]: any;
}

export interface CustomImageStylesInterface extends CustomImageInterface {
    theme: ThemeValues;
}
