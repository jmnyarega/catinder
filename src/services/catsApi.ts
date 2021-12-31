// constants
import URL from "../constants/url";

// helpers
import Axios from "../helpers/authentication";
import { dislikeCat, likeCat } from "./localstorage";

// types
import { Cat, Vote } from "../types/cat.types";

export const getRandomCatService = async (): Promise<Cat[]> => {
  const cat = await Axios.get(`${URL}/images/search`);
  return cat.data;
};

export const vote = async (imageId: string, value: number) => {
  const body: Vote = {
    image_id: imageId,
    sub_id: "josiah",
    value,
  };

  try {
    await Axios.post(`${URL}/votes`, body);
    value === 0 ? dislikeCat(imageId) : likeCat(imageId);
  } catch (error) {
    console.log(error);
  }
};
