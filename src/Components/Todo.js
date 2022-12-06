import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  background-color: ${(props) => (props.isDone ? "#f9f8f3" : "#fff")};
  border-top: 10px solid ${(props) => (props.isDone ? "#f19280" : "#35d282")};
  text-decoration: ${(props) => (props.isDone ? "line-through" : "")};
  width: 300px;
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

const Todo = ({ data: { title, content, id, isDone }, handleChangeIsDone, handleDeleteTodo }) => (
  <Container isDone={isDone}>
    <h3>{title}</h3>
    <Content>{content}</Content>
    <ButtonWrapper>
      <DoneBtn isDone={isDone} onClick={() => handleChangeIsDone(id)}>
        {isDone ? "취소" : "완료"}
      </DoneBtn>
      <DeletBtn isDone={isDone} onClick={() => handleDeleteTodo(id)}>
        삭제
      </DeletBtn>
    </ButtonWrapper>
  </Container>
);

export default Todo;
