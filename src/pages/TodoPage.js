import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
`;
const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  background-color: #dafdba;
`;
const BackArrow = styled.img`
  cursor: pointer;
`;
const Content = styled.div`
  flex: 1;
  padding: 30px;
`;
const ContentText = styled.div``;

const TodoPage = () => {
  const params = useParams();
  const { id } = params;
  const todo = useSelector((state) => state.todo).find((todo) => todo.id === +id);
  const { title, content } = todo;

  return (
    <Container>
      <Wrapper>
        <Header>
          <BackArrow src="/arrow.png" width={24} height={24} onClick={() => window.history.back()} />
        </Header>
        <Content>
          <p style={{ marginBottom: 30 }}>id: {id}</p>
          <h2>{title}</h2>
          <ContentText>{content}</ContentText>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default TodoPage;
