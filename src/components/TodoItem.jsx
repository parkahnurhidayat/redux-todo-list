/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { MdDelete } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
const TodoItem = ({ todos, editTodo, deleteTodoAction }) => {
  const handleComplete = (todos) => {
    editTodo(todos);
  };

  return (
    <div>
      <div>
        <table className="table-auto text-start w-1/2 mx-auto mt-10 rounded-xl overflow-hidden">
          <tbody>
            {todos?.map((todo, index) => (
              <tr
                key={index}
                onClick={() => handleComplete(todo)}
                className={`${
                  todo.completed
                    ? "line-through bg-green-400 italic"
                    : "bg-slate-300"
                } cursor-pointer hover:bg-slate-200 border-b-2 font-mono `}
              >
                <div>
                  <td className="p-2">
                    {todo.completed ? <AiOutlineCheck /> : ""}
                  </td>
                  <td className="p-2.5">{todo.task}</td>
                </div>
                <td
                  className="hover:text-red-400 text-lg"
                  onClick={() => {
                    deleteTodoAction(todo.id);
                  }}
                >
                  <MdDelete />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoItem;
