import { Routes, Route } from "react-router-dom";

// third party libs
import styled from "styled-components";

// components
import Layout from "./components/layout";
import Favourites from "./pages/favourites";
import Swipe from "./pages/swipe";

const RoutesComponent = () => (
  <Layout>
    <Container>
      <Routes>
        <Route path="/" element={<Swipe />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Container>
  </Layout>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export default RoutesComponent;
