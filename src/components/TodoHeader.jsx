import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TodoHeader = ({ getTodos }) => {
  const [inputTodo, setInputTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getTodos(inputTodo);
    setInputTodo("");
  };

  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-4xl font-bold mb-10">To Do List</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="relative w-1/2 mx-auto">
            <input
              type="text"
              value={inputTodo.task}
              onChange={handleChange}
              placeholder="add a todo"
              className="w-full p-2.5 border-s-2 bg-gray-50 border border-gray-300 rounded-e-lg focus:outline focus:outline-2 focus:outline-sky-300"
            />
            <button className="absolute h-full end-0  p-2.5 px-8 bg-sky-300 rounded-e-lg text-white font-semibold">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoHeader;
