import React, {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../../reducers/todoSlice';
import TodoItem from '../TodoItem/TodoItem';
import styles from './Todo.style';

const Todo = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState('');

  console.log(todos, 'todosss');

  const handleSubmit = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todos.todos}
        renderItem={({item}) => <TodoItem todo={item} />}
        keyExtractor={item => item.id}
      />
      <TextInput
        style={styles.input}
        onChangeText={setNewTodo}
        value={newTodo}
        placeholder="lütfen yapılacak görevi giriniz"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Todo;
