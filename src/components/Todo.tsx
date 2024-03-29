import { Link } from "react-router-dom";
import styled from "styled-components";

interface TodoProps {
  data: TodoType;
  handleChangeIsDone: Function;
  handleDeleteTodo: Function;
}

const Todo = ({ data: { title, content, id, isDone }, handleChangeIsDone, handleDeleteTodo }: TodoProps): JSX.Element => (
  <Container isDone={isDone}>
    <Link to={id.toString()}>
      <h3>{title}</h3>
      <Content>{content}</Content>
    </Link>
    <ButtonWrapper>
      <DoneBtn onClick={() => handleChangeIsDone(id)}>{isDone ? "취소" : "완료"}</DoneBtn>
      <DeletBtn onClick={() => handleDeleteTodo(id)}>삭제</DeletBtn>
    </ButtonWrapper>
  </Container>
);

const Container = styled.div<{ isDone: boolean }>`
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: ${(props) => (props.isDone ? "#f9f8f3" : "#fff")};
  border-top: 10px solid ${(props) => (props.isDone ? "#f19280" : "#35d282")};
`;
const Content = styled.div`
  margin-bottom: 20px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;
`;
const Button = styled.div`
  width: 60px;
  padding: 12px;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  transition: all 0.5s;
  text-decoration: none;
  &:hover {
    box-shadow: 1px 1px 8px #aaa;
  }
`;
const DoneBtn = styled(Button)`
  background-color: #dafdba;
`;
const DeletBtn = styled(Button)`
  background-color: #ddd;
`;

export default Todo;
