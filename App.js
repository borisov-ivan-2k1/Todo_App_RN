import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import * as Font from 'expo-font' 
import { AppLoading } from 'expo'

import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

async function loadApp() {
  await Font.loadAsync({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {

  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
    <AppLoading 
    startAsync={() => loadApp()} 
    onError={err => console.log(err)}
    onFinish={() => setIsReady(true)}
    />)
  }

  const addTodo = (title) => {
    setTodos( prev => [...prev, {
      title,
      id: Date.now().toString(),
    }])
  }

  const removeTodo = id => {
    const todo = todos.find(t => t.id == id)
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: 'Отмена',
          style: 'cancel'
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter( todo => todo.id !== id))
          }
        }
      ],
      {cancelable: false}
    )
    
  } 

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  let content = (
    <MainScreen 
    todos={todos} 
    addTodo={addTodo} 
    removeTodo={removeTodo} 
    openTodo={setTodoId}
    />  
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = (
    <TodoScreen 
    goBack={() => setTodoId('')} 
    onRemove={removeTodo} 
    todo={selectedTodo} 
    onSave={updateTodo}
    />)
  }

  return (
    <View style={styles.container}>
      <Navbar title='TODO'/>
      <View style={styles.addToDo}>
        {content}
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  addToDo: {
    padding: 10
  }
});
