import { render, screen } from "@testing-library/react";

import Layout from "../../components/layout";
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
      <Layout>
        <div> This is my awesome layout </div>
      </Layout>
    </Router>
  );
};

describe("#Layout", () => {
  renderComponent();

  it("should render children props", () => {
    screen.getByText("This is my awesome layout");
  });
});
