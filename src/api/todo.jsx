import axios from "axios";

export const fetchTodos = async () => {
  const res = await axios.get("http://localhost:5000/todos");
  return res;
};
export const createTodos = async (newTodos) => {
  const res = await axios.post("http://localhost:5000/todos", newTodos);
  return res;
};
export const editTodos = async (id, newTodos) => {
  const res = await axios.patch(`http://localhost:5000/todos/${id}`, newTodos);
  return res;
};
export const deleteTodo = async (id) => {
  const res = await axios.delete(`http://localhost:5000/todos/${id}`);
  return res;
};
