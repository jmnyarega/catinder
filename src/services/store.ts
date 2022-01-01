import { Iimage, IsaveVotes } from "../types/cat.types";

export const likeCat = (imageId: string, url: string, id: number) => {
  let cats: IsaveVotes = JSON.parse(localStorage.getItem("cats") || "{}");

  cats = {
    ...cats,
    liked: cats.liked
      ? cats.liked.concat({ imageId, url, id })
      : [{ imageId, url, id }],
  };

  localStorage.setItem("cats", JSON.stringify(cats));
};

export const dislikeCat = (imageId: string, url: string, id: number) => {
  let cats: IsaveVotes = JSON.parse(localStorage.getItem("cats") || "{}");

  cats = {
    ...cats,
    disliked: cats.disliked
      ? cats.disliked.concat({ imageId, url, id })
      : [{ imageId, url, id }],
  };

  localStorage.setItem("cats", JSON.stringify(cats));
};

export const removeCat = (imageId: string) => {
  let cats: IsaveVotes = JSON.parse(localStorage.getItem("cats") || "{}");

  const likedCats = cats?.liked?.filter(
    (cat: Iimage) => cat.imageId !== imageId
  );

  cats.liked = likedCats;

  localStorage.setItem("cats", JSON.stringify(cats));
};

export const getVotesFromLocalStorage = (): Iimage[] => {
  let cats: IsaveVotes = JSON.parse(localStorage.getItem("cats") || "{}");
  return cats?.liked;
};
