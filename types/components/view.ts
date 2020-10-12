import { ReactNode } from "react";

import { ThemeValues } from "../../types/components/styles";

export interface MarginViewInterface {
    [key: string]: any;
    children?: ReactNode;
}

export interface MarginViewStylesInterface extends MarginViewInterface{
    theme: ThemeValues;
}