import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";

interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {

  const [result, setResult] = useState<Pokemon[]>([]);
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
      const response = await fetch(URL);

      if (response.ok) {
        const data = await response.json();
        setResult(data.results);
        setAllPokemon(data.results);
      }

    } catch (error) {
      console.log("error en la consulta");
    }
  };

  const filterPokemon = (text: string) => {
    setTexto(text);

    const arrayFiltered = allPokemon.filter((pokemon) =>
      pokemon.name.includes(text.toLowerCase())
    );

    setResult(arrayFiltered);
  };

  return (
    <ScrollView>

      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        value={texto}
        onChangeText={(nuevoTexto) => filterPokemon(nuevoTexto)}
      />

      {result.map((item) => {
        return (
          <PokemonCard
            key={item.name}
            name={item.name}
            url={item.url}
          />
        );
      })}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});