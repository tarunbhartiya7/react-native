import React from "react";
import { Text, FlatList, StyleSheet, View, Image } from "react-native";

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
  },
});

const ImageDetail = ({ title, image }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
    </View>
  );
};

export default ImageDetail;
