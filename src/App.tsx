import React from "react";

// third party libs
import styled from "styled-components";

// page components
import Swipe from "./pages/swipe";

const App: React.FC = () => {
  return (
    <Container>
      <Swipe />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;

export default App;
