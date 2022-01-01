// helpers
import Axios from "../helpers/authentication";
import { dislikeCat, likeCat, removeCat } from "./store";

// types
import { Cat, Vote } from "../types/cat.types";

export const getRandomCatService = async (): Promise<Cat[]> => {
  const cat = await Axios.get("/images/search");
  return cat.data;
};

export const getCatById = async (imageId: string): Promise<Cat> => {
  const cat = await Axios.get(`images/${imageId}`);
  return cat.data;
};

export const getVottedCats = async (): Promise<Vote[]> => {
  const cats = await Axios.get("votes");
  return cats.data.filter((vote: Vote) => vote.value > 0);
};

export const removeVottedCat = async (voteId: number, imageId: string) => {
  try {
    await Axios.delete(`votes/${voteId}`);
    removeCat(imageId);
  } catch (error) {
    console.log(error);
  }
};

export const vote = async (
  imageId: string | undefined,
  value: number,
  url: string | undefined
) => {
  const body: Vote = {
    image_id: imageId || "",
    sub_id: "josiah",
    value,
  };

  try {
    await Axios.post("votes", body);
    value === 0 ? dislikeCat(imageId, url) : likeCat(imageId, url);
  } catch (error) {
    console.log(error);
  }
};
