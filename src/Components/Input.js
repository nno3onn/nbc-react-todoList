import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createTodo } from "../redux/modules/todo";

const Container = styled.div`
  background-color: #e1fce9;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
const CreateButton = styled.button`
  margin-top: 20px;
  width: 80px;
  background-color: white;
  border-radius: 20px;
  padding: 12px;
  margin-left: 180px;
`;
const Title = styled.p`
  font-weight: bold;
`;
const Input = styled.input`
  border: 1px solid #eee;
  background-color: white;
  border-radius: 8px;
  padding: 5px 20px;
`;

const Inputs = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);
  const titleRef = useRef();
  const contentRef = useRef();

  const handleCreate = () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    if (!title || !content) {
      return alert("모두 입력해주세요");
    }
    // if (title.length > 35 || content.length > 35) {
    //   return alert("35자 이내로 작성해주세요");
    // }

    dispatch(createTodo({ id: `todo-${todoList.length + 1}`, title, content, isDone: false }));
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
    <Container>
      <Wrapper>
        <>
          <Title>제목</Title>
          <Input ref={titleRef} />
        </>
        <>
          <Title>내용</Title>
          <Input ref={contentRef} />
        </>
        <CreateButton onClick={handleCreate}>작성</CreateButton>
      </Wrapper>
    </Container>
  );
};

export default Inputs;
