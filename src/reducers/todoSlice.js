import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {id: 1, title: 'yapılacak 1', checked: true},
    {id: 2, title: 'yapılacak 2', checked: false},
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Math.random(),
        title: action.payload,
        checked: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleCheck: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo,
      );
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? {...todo, title: action.payload.title}
          : todo,
      );
    },
  },
});

export const {addTodo, deleteTodo, toggleCheck, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;
