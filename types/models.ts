export interface pokemonType {
    id: number;
    name: string;
    uri: string;
    url?: string;
    details?: pokemonDetailsType;
}

export interface pokemonDetailsType {
    height: number;
    weight: number;
    description: string;
    stats: {
        [key: string]: number;
    };
}

export interface responseType {
    count: number;
    next: string | null;
    previous: string | null;
    results: pokemonType[];
}
