import { crud } from "./api";

const domain = crud("https://pokeapi.co/");

export const getDataCall = async (url?: string) => {
    let params = "?offset=0&limit=50";
    if (url) {
        if (url.includes("?")) params = "?"+url.split("?")[1];
        else params = url;
    }

    const source = domain(`/api/v2/pokemon/${params}`);
    const response = await source.read();

    return response;
};

export const getPokemonDetailsCall = async (id:number) => {
    const source = domain(`/api/v2/pokemon-species/${id}`);
    const response = await source.read();

    return response;
};
