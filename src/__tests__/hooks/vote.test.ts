import { renderHook, act } from "@testing-library/react-hooks";
import { useVote } from "../../hooks/vote";

const cats = [
  {
    country_code: null,
    created_at: "2018-10-24T08:36:16.000Z",
    id: 31099,
    image_id: "4lo",
    sub_id: null,
    value: 0,
  },
];

test("Vote", () => {
  const { result } = renderHook(() => useVote());

  act(() => {
    result.current.setCats(cats);
  });

  expect(result.current.cats).toBe(cats);
});
