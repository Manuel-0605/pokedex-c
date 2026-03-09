import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";


interface Pokemon {
  name: string;

  url: string;
}

export default function Index() {

  const [result, setResult] = useState<Pokemon[]>([]);

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
      }

    } catch (error) {
      console.log("error en la consulta");
    }
  };

  return (
    <ScrollView>
      {result.map((item) => {
        return <PokemonCard
          key={item.name}
          name={item.name}
          url={item.url}
        />;
      })}

    </ScrollView>
  );
}