import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, removeTodo, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpen(todo.id)}
      onLongPress={() => removeTodo(todo.id)}
    >
      <View style={styles.todo}>
        <Text style={styles.title}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "column",
    padding: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: 10,
  },
  title: {
    // fontFamily: 'roboto-bold'
  }
});
