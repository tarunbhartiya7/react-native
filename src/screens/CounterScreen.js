import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "cyan",
    backgroundColor: "#454545",
  },
});

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => setCounter((prev) => prev + 1)} />
      <Button title="Decrease" onPress={() => setCounter((prev) => prev - 1)} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;
