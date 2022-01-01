import { render, screen } from "@testing-library/react";

import CoverImage from "../../components/coverImage";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

const renderComponent = () =>
  render(
    <CoverImage
      url="https://joeschmoe.io/api/v1/random"
      styles={{ color: "red" }}
    />
  );

describe("#CoverImage", () => {
  renderComponent();

  it("should get alt text in image tag", async () => {
    const altImage = await screen.findByAltText(
      "https://joeschmoe.io/api/v1/random"
    );
    expect(altImage.tagName).toBe("IMG");
  });
});
