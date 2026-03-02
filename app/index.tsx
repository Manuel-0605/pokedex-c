import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {

  const getPokemons = async () => {
    try {
      useEffect(() => {
        console.log("Entre en pantalla");
        getPokemons();
      }, []);
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        console.log("Request ok")
      } else {
        console.log("Bard Request")
      }
    } catch (error) { }
  };
  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
