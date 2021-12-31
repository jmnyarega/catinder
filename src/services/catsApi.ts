// constants
import URL from "../constants/url";

// helpers
import Axios from "../helpers/authentication";
import { dislikeCat, likeCat, removeCat } from "./localstorage";

// types
import { Cat, Vote } from "../types/cat.types";

export const getRandomCatService = async (): Promise<Cat[]> => {
  const cat = await Axios.get(`${URL}/images/search`);
  return cat.data;
};

export const getCatById = async (imageId: string): Promise<Cat> => {
  const cat = await Axios.get(`${URL}/images/${imageId}`);
  return cat.data;
};

export const getFavouriteCats = async (): Promise<Vote[]> => {
  const cats = await Axios.get(`${URL}/votes`);
  return cats.data;
};

export const removeFavouriteCat = async (voteId: number, imageId: string) => {
  try {
    await Axios.delete(`${URL}/votes/${voteId}`);
    removeCat(imageId);
  } catch (error) {
    console.log(error);
  }
};

export const vote = async (imageId: string, value: number, url: string) => {
  const body: Vote = {
    image_id: imageId,
    sub_id: "josiah",
    value,
  };

  try {
    await Axios.post(`${URL}/votes`, body);
    value === 0 ? dislikeCat(imageId, url) : likeCat(imageId, url);
  } catch (error) {
    console.log(error);
  }
};
