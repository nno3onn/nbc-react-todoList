import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createTodo } from "../redux/modules/todo";

const Inputs = (): JSX.Element => {
  const dispatch = useDispatch();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const handleCreate = () => {
    if (!titleRef.current || !contentRef.current) return;

    const title = titleRef.current.value;
    const content = contentRef.current.value;
    if (!title || !content) {
      return alert("모두 입력해주세요");
    }
    dispatch(createTodo({ id: Date.now(), title, content, isDone: false }));
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

export default Inputs;
