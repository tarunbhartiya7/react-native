import React from "react";
import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "cyan",
    backgroundColor: "#454545",
  },
});

const greeting = "Getting started with React Native!";
const name = "Neha";
const message = <Text style={styles.text}>My name is {name}</Text>;

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 45 }}>{greeting}</Text>
      {message}
    </View>
  );
};

export default ComponentsScreen;
