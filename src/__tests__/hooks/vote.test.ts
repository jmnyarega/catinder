import { renderHook, act } from "@testing-library/react-hooks";
import { useVote } from "../../hooks/vote";

const cats = [
  {
    url: "https://cdn2.thecatapi.com/images/5vk.jpg",
    id: 31099,
    imageId: "4lo",
  },
];

test("Vote", () => {
  const { result } = renderHook(() => useVote());

  act(() => {
    result.current.setCats(cats);
  });

  expect(result.current.cats).toBe(cats);
});
