import { render, screen } from "@testing-library/react";

import Favourites from "../../pages/favourites";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

const renderComponent = () => render(<Favourites />);

describe("#Favourites", () => {
  renderComponent();

  it("should return title of the Favourites page component", () => {
    screen.getByText("Your Favourite Cats");
  });
});
