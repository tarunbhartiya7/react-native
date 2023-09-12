import React from "react";
import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  view: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  textOne: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "red",
  },
  textTwo: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "lightblue",
    top: 20,
    // ...StyleSheet.absoluteFillObject,
  },
  textThree: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "lightgreen",
  },
});

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.textOne}>Child #1</Text>
      <Text style={styles.textTwo}>Child #2</Text>
      <Text style={styles.textThree}>Child #3</Text>
    </View>
  );
};

export default BoxScreen;
