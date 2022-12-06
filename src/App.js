import styled from "styled-components";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./pages/Main";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Nav />
      <Main />
    </Container>
  );
}

export default App;
