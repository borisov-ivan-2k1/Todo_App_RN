import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { THEME } from '../theme'
import { AppCard } from "../components/UI/AppCard";
import { EditModal } from "../components/EditModal";

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {

  const [modal, setModal] = useState(false)

  const saveHandler = title => {
    onSave(todo.id, title)
    setModal(false)
  }

  return (
    <View style={styles}>
      <AppCard style={styles.card}> 
        <Text style={styles.title}>{todo.title}</Text>
        <Button title='Редактировать' onPress={() => setModal(true)}/>
      </AppCard>
      <View style={styles.buttons}>
        <View>
        <Button style={styles.button} title="Назад" color={THEME.GRAY_COLOR} onPress={() => goBack()} />
        </View>
        <View>
        <Button style={styles.button} title="Удалить" color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)} />
        </View>
      </View>
      <EditModal 
      value={todo.title} 
      visible={modal} 
      closeModal={() => setModal(false)} 
      onSave={saveHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    marginBottom: 20,
    padding: 15
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20,
  }
});
