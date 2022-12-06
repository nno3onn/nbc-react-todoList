import styled from "styled-components";
import { v4 } from "uuid";
import Todo from "./Todo";

const TodoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 50px;
`;

const TodoList = ({ todoList, setTodoList }) => {
  const handleChangeIsDone = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, isDone: !todo.isDone };
      return todo;
    });
    setTodoList([...newTodoList]);
  };

  const handleDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList([...newTodoList]);
  };

  return (
    <>
      <h2>Working</h2>
      <TodoWrapper>
        {todoList
          .filter((v) => !v.isDone)
          .map((data, i) => (
            <Todo key={v4()} data={data} handleChangeIsDone={handleChangeIsDone} handleDeleteTodo={handleDeleteTodo} />
          ))}
      </TodoWrapper>
      <h2>Complete</h2>
      <TodoWrapper>
        {todoList
          .filter((v) => v.isDone)
          .map((data, i) => (
            <Todo key={v4()} data={data} handleChangeIsDone={handleChangeIsDone} handleDeleteTodo={handleDeleteTodo} />
          ))}
      </TodoWrapper>
    </>
  );
};

export default TodoList;
