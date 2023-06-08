import { View, Text, StyleSheet } from "react-native";
import { Card } from "./Card";
import { useBeers } from "../hooks/useBeers";

export const BeerList = ({ navigation }) => {
  const { data, error, loader } = useBeers();
  if (loader) return <Text>Loading...</Text>;
  return (
    <View>
      {error && <Text>Error: {error}</Text>}
      <Text>Beer List</Text>
      {data &&
        data.map((beer) => {
          return (
            <View key={beer.id}>
              {loader ? (
                <Text>Loading...</Text>
              ) : (
                <Card
                  id={beer.id}
                  image_url={beer.image_url}
                  name={beer.name}
                  tagline={beer.tagline}
                  first_brewed={beer.first_brewed}
                  description={beer.description}
                  contributed_by={beer.contributed_by}
                  abv= {beer.abv}
                  ph= {beer.ph}
                />
              )}
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({});
