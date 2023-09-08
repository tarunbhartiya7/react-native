import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";
import Forest from "../../assets/forest.jpg";
import Beach from "../../assets/beach.jpg";
import Mountain from "../../assets/mountain.jpg";

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
  },
});

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" image={Forest} />
      <ImageDetail title="Beach" image={Beach} />
      <ImageDetail title="Mountain" image={Mountain} />
    </View>
  );
};

export default ImageScreen;
