import styled from "styled-components";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./pages/Main";

const Container = styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
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
