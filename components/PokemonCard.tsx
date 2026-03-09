import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";

interface pokemonCardProps {
    name: string;
    url: string;
}

export default function PokemonCard(props: pokemonCardProps) {

    const id = props.url.split("/").filter(Boolean).at(-1);

    const pokemonImageURL =
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <Pressable
            onPress={() => router.push(`/pokemon/${props.name}`)}
            style={({ pressed }) => [styles.PressableStyle,
            pressed && {
                opacity: 0.5
            }
            ]}
        >
            <Image
                source={{ uri: pokemonImageURL }}
                style={{ width: 100, height: 100 }}
            />

            <Text>{props.name}</Text>
            <Text>{props.url}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    PressableStyle: {
        borderWidth: 1,
        alignItems: "center",
        backgroundColor: "#8ae1bc"
    },
});