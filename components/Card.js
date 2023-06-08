import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useState, useEffect } from "react";

export const Card = (props) => {
  const [more, setMore] = useState(false);
  return (
    <View style={styles.card} key={props.id}>
      <Text style={styles.text}>{props.name}</Text>
      <Text style={styles.text}>{props.tagline}</Text>
      <Text style={styles.text}>since {props.first_brewed}</Text>
      <Button
        title="Read More"
        style={styles.button}
        onPress={() => {
          setMore(more ? false : true);
        }}
      />
      {more && (
        <View>
          <Text style={styles.meta}>{props.description}</Text>
          <Text style={styles.meta}>Contributor: {props.contributed_by}</Text>
          <Text style={styles.meta}>Alcohol by volume: {props.abv}</Text>
          <Text style={styles.meta}>Ph: {props.ph}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    width: 250,
    backgroundColor: "black",
    borderRadius: 10,
    padding: 20,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  meta: {
    color: "white",
    marginVertical: 15,
  },
});
