import React, { useState } from "react";
import styled from "styled-components";
import Inputs from "../Components/Input";
import TodoList from "../Components/TodoList";

const Container = styled.div`
  min-width: 800px;
  max-width: 1200px;
  padding: 50px 0;
`;

const Main = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <Container>
      <Inputs todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </Container>
  );
};

export default Main;
