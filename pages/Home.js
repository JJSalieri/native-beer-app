import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { BeerList } from "../components/BeerList";

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Text style={styles.text}>Home</Text>
      <BeerList />
      <Button
        title="Visit Profile"
        onPress={() => {
         navigation.navigate("beer", { id: 1 });
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
