type domainType = string;
type sourceType = string;
type objectType = { [key: string]: any };

export interface serverResponseType {
    error: string;
    message: string;
    data: objectType[];
}

export interface crudResponseType<T> {
    read: () => Promise<T>;
}

export const crud = (domain: domainType) => (
    source: sourceType
): crudResponseType<any> => {
    if (domain === undefined || domain === null || domain === "")
        return {
            read: () => {
                return Promise.reject("Provide an URL base (http://url.com/)");
            },
        };
    if (source === undefined || source === null || source === "")
        return {
            read: () => {
                return Promise.reject(
                    "Provide a source you want to fetch (/get/categories/)"
                );
            },
        };

    let d = domain;
    if (domain[domain.length - 1] !== "/") d += "/";

    let s = source;
    if (source[source.length - 1] === "/") s = s.slice(0, -1);
    if (source[0] === "/") s = s.slice(1);
    const url = d + s;

    return {
        read: async (): Promise<Response> => {
            const opts: RequestInit = {
                method: "GET",
            };

            return await apiCall(url, opts);
        },
    };
};

const apiCall = async (url: any, opts: any): Promise<Response> => {
    try {
        const resp = await fetch(url, opts);
        if (!resp.ok) return Promise.reject("Sorry, something went wrong!");
        return resp.json();
    } catch (error) {
        return Promise.reject("Sorry, something went wrong!");
    }
};

export const binarySearch = (arr: any[], elem: number) => {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (+arr[middle].id !== +elem && start <= end) {
        if (+elem < +arr[middle].id) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }

    if (+arr[middle].id === +elem) return middle;
    else return -1;
};

export const createPokemonObj = (obj: any) => {
    return obj.results.map((r: any) => {
        const id = r.url
            .split("https://pokeapi.co/api/v2/pokemon")[1]
            .split("/")[1];
        return {
            id: id,
            name: r.name,
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
    });
};

export const randomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getEn = (
    data: {
        flavor_text: string;
        language: { name: string; url: string };
        version: { name: string; url: string };
    }[]
) => {
    const newData = [];
    for (let i = 0; i < data.length; i++) {
        const el = data[i];
        if (el.language.name === "en") newData.push(el);
    }

    return newData.length === 0
        ? {
              flavor_text: "No description",
          }
        : newData[randomNumber(0, newData.length)];
};
