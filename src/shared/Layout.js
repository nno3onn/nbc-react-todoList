import styled from "styled-components";
import Nav from "../components/Nav";

const Container = styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <Container>
    <Nav />
    {children}
  </Container>
);

export default Layout;
