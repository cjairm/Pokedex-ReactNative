import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
    PokemonDetails: {
        pokemonId: number;
    };
};

export type PokemonDetailsRoute = RouteProp<RootStackParamList, "PokemonDetails">;

export default RootStackParamList;