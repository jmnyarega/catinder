import { Votes } from "../types/cat.types";

export const likeCat = async (id: string) => {
  let cats: Votes = JSON.parse(localStorage.getItem("cats") || "{}");

  cats = {
    ...cats,
    liked: cats.liked ? cats.liked.concat(id) : [id],
  };

  localStorage.setItem("cats", JSON.stringify(cats));
};

export const dislikeCat = async (imageId: string) => {
  let cats: Votes = JSON.parse(localStorage.getItem("cats") || "{}");

  cats = {
    ...cats,
    disliked: cats.disliked ? cats.disliked.concat(imageId) : [imageId],
  };

  localStorage.setItem("cats", JSON.stringify(cats));
};
