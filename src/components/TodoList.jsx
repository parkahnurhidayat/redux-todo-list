import { useEffect } from "react";
import TodoItem from "../containers/TodoItem";

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, fecthTodo }) => {
  useEffect(() => {
    fecthTodo();
  });
  return (
    <div>
      <TodoItem todos={todos} />
    </div>
  );
};

export default TodoList;
