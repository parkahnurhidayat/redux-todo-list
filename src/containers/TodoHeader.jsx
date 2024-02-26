import { connect } from "react-redux";
import TodoHeader from "../components/TodoHeader";
import { getTodos } from "../actions";

export default connect(null, { getTodos })(TodoHeader);
