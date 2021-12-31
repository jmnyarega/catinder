import { Image, Votes } from "../types/cat.types";

export const likeCat = (
  imageId: string | undefined,
  url: string | undefined
) => {
  let cats: Votes = JSON.parse(localStorage.getItem("cats") || "{}");

  cats = {
    ...cats,
    liked: cats.liked
      ? cats.liked.concat({ imageId, url })
      : [{ imageId, url }],
  };

  localStorage.setItem("cats", JSON.stringify(cats));
};

export const dislikeCat = (
  imageId: string | undefined,
  url: string | undefined
) => {
  let cats: Votes = JSON.parse(localStorage.getItem("cats") || "{}");

  cats = {
    ...cats,
    disliked: cats.disliked
      ? cats.disliked.concat({ imageId, url })
      : [{ imageId, url }],
  };

  localStorage.setItem("cats", JSON.stringify(cats));
};

export const removeCat = (imageId: string) => {
  let cats: Votes = JSON.parse(localStorage.getItem("cats") || "{}");

  const likedCats = cats?.liked.filter((cat: Image) => cat.imageId !== imageId);

  cats.liked = likedCats;

  localStorage.setItem("cats", JSON.stringify(cats));
};

export const getImageUrl = (imageId: string): string | undefined => {
  let cats: Votes = JSON.parse(localStorage.getItem("cats") || "{}");

  const likedCat = cats?.liked.find((cat: Image) => cat.imageId === imageId);

  return likedCat?.url;
};
