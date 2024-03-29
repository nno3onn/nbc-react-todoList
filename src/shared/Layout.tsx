import { ReactNode } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <Container>
    <Nav />
    {children}
  </Container>
);

const Container = styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
`;

export default Layout;
