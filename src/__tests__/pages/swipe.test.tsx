import { render } from "@testing-library/react";

import Swipe from "../../pages/swipe";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

test("renders without error", () => {
  render(<Swipe />);
});
