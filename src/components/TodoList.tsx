import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { deleteTodo, TodoType, updateTodo } from "../redux/modules/todo";
import Todo from "./Todo";

const TodoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 50px;
`;

const TodoList = (): JSX.Element => {
  const dispatch = useDispatch();
  const todoList = useSelector(({ todo }: any) => todo);

  const handleChangeIsDone = (id: number) => dispatch(updateTodo(id));
  const handleDeleteTodo = (id: number) => dispatch(deleteTodo(id));

  return (
    <>
      <h2>Working</h2>
      <TodoWrapper>
        {todoList
          .filter((v: TodoType) => !v.isDone)
          .map((data: TodoType) => (
            <Todo key={uuidv4()} data={data} handleChangeIsDone={handleChangeIsDone} handleDeleteTodo={handleDeleteTodo} />
          ))}
      </TodoWrapper>
      <h2>Complete</h2>
      <TodoWrapper>
        {todoList
          .filter((v: TodoType) => v.isDone)
          .map((data: TodoType) => (
            <Todo key={uuidv4()} data={data} handleChangeIsDone={handleChangeIsDone} handleDeleteTodo={handleDeleteTodo} />
          ))}
      </TodoWrapper>
    </>
  );
};

export default TodoList;
