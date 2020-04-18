import React, { useState } from 'react'
import { View, StyleSheet, Button, TextInput, Alert } from 'react-native'
import { THEME } from '../theme'

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Введите название дела')
    }
    
  }

  return (
    <View style={styles.block}>
      <TextInput 
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder='Введите название дела'
        autoCorrect={false}
      />
      <Button style={styles.button} title='Добавить' onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '60%',
    paddingTop: 10,
    paddingBottom: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR
  },
  button: {
    color: '#fff',
    backgroundColor: '#3949ab'
  }
})