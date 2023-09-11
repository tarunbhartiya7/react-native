import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
  },
});

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={onIncrease} title={`Increase ${color}`} />
      <Button onPress={onDecrease} title={`Decrease ${color}`} />
    </View>
  );
};

export default ColorCounter;
