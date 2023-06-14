import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  todos: [],
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //   console.log("red", state.todos);
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      console.log("red", state.todos, action.payload);

      state.todos = state.todos.filter((elem) => elem.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = counterSlice.actions;
export default counterSlice.reducer;
