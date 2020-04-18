import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Alert } from "react-native";
import { THEME } from "../theme";

export const EditModal = ({ visible, closeModal, value, onSave }) => {

  const [ title, setTitle ] = useState(value)

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert('Ошибка!', `Минимальная длина названия 3 символа. Сейчас ${title.trim().length} ${title.trim().length === 2 ? 'символа' : title.trim().length === 1 ? 'символ' : 'символов'}`)
    } else {
      onSave(title)
    }
  }

  return (
    <Modal visible={visible} animationType="fade" transperent={false}>
      <View style={styles.wrap}>
        <TextInput 
        value={title} 
        onChangeText={setTitle}
        style={styles.input} 
        placeholder='Введите название'
        />
        <View style={styles.buttons}>
        <Button color={THEME.DANGER_COLOR} title="Отменить" onPress={() => closeModal()} />
        <Button title="Сохранить" onPress={() => saveHandler()}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },
  buttons: {
    width: '80%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
