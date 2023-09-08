import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";

const friends = [
  { name: "Sam", id: 1, age: 20 },
  { name: "Rahul", id: 2, age: 30 },
  { name: "Kim", id: 3, age: 25 },
  { name: "Jordan", id: 4, age: 23 },
  { name: "Mike", id: 5, age: 32 },
  { name: "Lila", id: 6, age: 29 },
  { name: "Simi", id: 7, age: 28 },
  { name: "Anne", id: 8, age: 31 },
  { name: "George", id: 9, age: 35 },
  { name: "Jane", id: 10, age: 19 },
];

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
  },
});

const ListScreen = () => {
  return (
    <FlatList
      data={friends}
      renderItem={({ item, id }) => {
        return (
          <Text style={styles.text} key={id}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

export default ListScreen;
