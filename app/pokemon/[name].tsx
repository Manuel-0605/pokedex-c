import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function PokemonDetailsScreen() {
    const parms = useLocalSearchParams();
    return (
        <View>
            <Text>{parms.name} </Text>
        </View>
    )
}