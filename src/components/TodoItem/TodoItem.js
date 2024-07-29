import React, {useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteTodo, toggleCheck, updateTodo} from '../../reducers/todoSlice';
import styles from './TodoItem.style';

const TodoItem = ({todo}) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.title);

  console.log(todo, 'gelen todo');
  console.log(editedTodo, 'editedTodo todo');

  const handleUpdate = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        title: editedTodo,
      }),
    );
    setIsEditing(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={todo.checked ? styles.checked : styles.not_checked}
        onPress={() => dispatch(toggleCheck(todo.id))}
      />
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={editedTodo}
          onChangeText={setEditedTodo}
        />
      ) : (
        <Text style={styles.title}>{todo.title}</Text>
      )}
      <Button
        style={styles.button}
        title="Delete"
        onPress={() => dispatch(deleteTodo(todo.id))}
      />
      <Button
        title={isEditing ? 'Save' : 'Edit'}
        onPress={() => (isEditing ? handleUpdate() : setIsEditing(!isEditing))}
      />
    </View>
  );
};

export default TodoItem;
