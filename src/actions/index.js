import * as types from "../constants/ActionType";
import { fetchTodos, createTodos, editTodos, deleteTodo } from "../api/todo";

export const getTodos = (newTodos) => async (dispatch) => {
  try {
    const todo = { task: newTodos, completed: false };
    const res = await createTodos(todo);
    dispatch({ type: types.ADD_TODOS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const editTodo = (data) => async (dispatch) => {
  try {
    const editTodo = { ...data, completed: !data.completed };
    const res = await editTodos(data.id, editTodo);
    dispatch({ type: types.EDIT_TODOS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoAction = (id) => async (dispatch) => {
  try {
    await deleteTodo(id);
    dispatch({ type: types.DELETE_TODOS, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const fecthTodo = () => async (dispatch) => {
  try {
    const res = await fetchTodos();
    dispatch({ type: types.GET_TODOS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
