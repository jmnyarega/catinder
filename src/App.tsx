import React from "react";

// third party libs
import styled from "styled-components";
import Layout from "./components/layout";

// page components
import Swipe from "./pages/swipe";

const App: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Swipe />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  min-height: calc(100vh - 100px);
`;

export default App;
