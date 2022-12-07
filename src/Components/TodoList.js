import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 } from "uuid";
import { deleteTodo, updateTodo } from "../redux/modules/todo";
import Todo from "./Todo";

const TodoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 50px;
`;

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);

  const handleChangeIsDone = (id) => dispatch(updateTodo(id));
  const handleDeleteTodo = (id) => dispatch(deleteTodo(id));

  return (
    <>
      <h2>Working</h2>
      <TodoWrapper>
        {todoList
          .filter((v) => !v.isDone)
          .map((data) => (
            <Todo key={v4()} data={data} handleChangeIsDone={handleChangeIsDone} handleDeleteTodo={handleDeleteTodo} />
          ))}
      </TodoWrapper>
      <h2>Complete</h2>
      <TodoWrapper>
        {todoList
          .filter((v) => v.isDone)
          .map((data) => (
            <Todo key={v4()} data={data} handleChangeIsDone={handleChangeIsDone} handleDeleteTodo={handleDeleteTodo} />
          ))}
      </TodoWrapper>
    </>
  );
};

export default TodoList;
