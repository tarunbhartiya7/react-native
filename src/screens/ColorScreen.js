import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "cyan",
    backgroundColor: "#454545",
  },
});

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const handleColor = () => {
    setColors([...colors, randomRgb()]);
  };

  return (
    <View>
      <Button title="Add a Color" onPress={handleColor} />
      {/* {colors.map((color) => (  // This will not provide scrolling option, hence FlatList
        <View
          key={color}
          style={{ height: 100, width: 100, backgroundColor: color }}
        />
      ))} */}
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              key={item}
              style={{ height: 100, width: 100, backgroundColor: item }}
            />
          );
        }}
      />
    </View>
  );
};

export default ColorScreen;
