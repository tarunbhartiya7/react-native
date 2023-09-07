import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Hi Varun!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "cyan",
    backgroundColor: "#454545",
  },
});

export default HomeScreen;
