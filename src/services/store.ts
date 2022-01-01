import { Iimage, IsaveVotes } from "../types/cat.types";

export const likeCat = (imageId: string, url: string) => {
  let cats: IsaveVotes = JSON.parse(localStorage.getItem("cats") || "{}");

  cats = {
    ...cats,
    liked: cats.liked
      ? cats.liked.concat({ imageId, url })
      : [{ imageId, url }],
  };

  localStorage.setItem("cats", JSON.stringify(cats));
};

export const dislikeCat = (imageId: string, url: string) => {
  let cats: IsaveVotes = JSON.parse(localStorage.getItem("cats") || "{}");

  cats = {
    ...cats,
    disliked: cats.disliked
      ? cats.disliked.concat({ imageId, url })
      : [{ imageId, url }],
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

export const getImageUrl = (imageId: string): string => {
  let cats: IsaveVotes = JSON.parse(localStorage.getItem("cats") || "{}");

  const likedCat = cats?.liked?.find((cat: Iimage) => cat.imageId === imageId);

  return likedCat?.url ?? "";
};
