import React from "react";

function TodoList() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Todo List</h1>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <input
        type="text"
        placeholder="Add todo item"
        className="h-9 w-40 bg-white rounded-md p-3 border-[1px] border-solid border-white ml-3 mt-10"
      />
      <button>Add</button>
    </div>
  );
}

export default TodoList;
