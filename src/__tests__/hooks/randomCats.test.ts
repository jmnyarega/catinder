import { renderHook, act } from "@testing-library/react-hooks";
import { useGetCats } from "../../hooks/randomCats";

const cat = {
  breeds: [],
  height: 281,
  id: "da7",
  url: "https://cdn2.thecatapi.com/images/da7.gif",
  width: 499,
};

test("Get random cat", () => {
  const { result } = renderHook(() => useGetCats());

  act(() => {
    result.current.setCat(cat);
  });

  expect(result.current.cat).toBe(cat);
});
