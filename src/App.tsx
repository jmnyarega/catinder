// third party libs
import { Routes, Route } from "react-router-dom";

// components
import Layout from "./components/layout";
import Favourites from "./pages/favourites";
import Swipe from "./pages/swipe";

const RoutesComponent = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Swipe />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  </Layout>
);

export default RoutesComponent;
