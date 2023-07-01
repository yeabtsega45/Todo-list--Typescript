import React, { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: false;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([]);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mt-4">
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add todo item"
        className="h-9 w-[165px] bg-white rounded-md p-3 border-[1px] border-solid border-white ml-3 mt-10"
      />
      <button className="h-8 w-[60px] bg-blue-800 text-white text-base mt-3 cursor-pointer">
        Add
      </button>
    </div>
  );
};

export default TodoList;
