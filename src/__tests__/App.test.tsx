import { render } from "@testing-library/react";

import App from "../App";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

const renderComponent = () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );
};

test("renders without error", async () => {
  renderComponent();
});
