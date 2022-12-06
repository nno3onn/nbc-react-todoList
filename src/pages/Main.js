import React, { useState } from "react";
import Inputs from "../Components/Input";
import TodoList from "../Components/TodoList";

const Main = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <Inputs todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
};

export default Main;
