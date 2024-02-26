import { connect } from "react-redux";
import TodoItem from "../components/TodoItem";
import { editTodo, deleteTodoAction } from "../actions";

export default connect(null, { editTodo, deleteTodoAction })(TodoItem);
