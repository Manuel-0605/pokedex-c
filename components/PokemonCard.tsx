import React from "react";
import { Image, Text, View, } from "react-native";

interface pokemonCardProps {

    name: string;

    url: string;
}
export default function PokemonCard(props: pokemonCardProps) {
    const id = props.url.split("/").filter(Boolean).at(-1);
    console.log(id);
    const pokemonImageURL =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6${id}.png"
    return (
        <View>
            <Image source={{ uri: pokemonImageURL }}
                style={{ width: 100, height: 100 }}>

            </Image>
            <Text>props.name</Text>
            <Text>props.url</Text>
        </View>
    );
}