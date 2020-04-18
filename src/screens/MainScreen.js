import React from "react";
import { StyleSheet, FlatList, View, Text, Image } from "react-native";
import { Todo } from "../components/Todo";
import { AddTodo } from "../components/AddTodo";
import { THEME } from "../theme";


export const MainScreen = ({ addTodo, removeTodo, todos, openTodo }) => {
  let content = (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} removeTodo={removeTodo} onOpen={openTodo} />
      )}
    />
  );

  if (todos.length === 0) {
    content =( 
    <View style={styles.imgWrap}>
      <Image style={styles.image} source={require('../../assets/no-items.png')}/>
      <Text style={styles.text}>Ваш список пуст!</Text>
    </View>)
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300,
  },
  image: {
    width:'100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    paddingTop: 20,
    fontSize: 26,
    color: THEME.GRAY_COLOR,
  }
});
