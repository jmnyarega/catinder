// helpers
import Axios from "../helpers/authentication";
import { dislikeCat, likeCat, removeCat } from "./store";

// types
import { ICat, IVote } from "../types/cat.types";

export const getRandomCatService = async (): Promise<ICat[]> => {
  const cat = await Axios.get("/images/search");
  return cat.data;
};

export const getCatById = async (imageId: string): Promise<ICat> => {
  const cat = await Axios.get(`images/${imageId}`);
  return cat.data;
};

export const getVottedCats = async (): Promise<IVote[]> => {
  const cats = await Axios.get("votes");
  return cats.data.filter((vote: IVote) => vote.value > 0);
};

export const removeVottedCat = async (voteId: number, imageId: string) => {
  try {
    await Axios.delete(`votes/${voteId}`);
    removeCat(imageId);
  } catch (error) {
    console.log(error);
  }
};

export const vote = async (imageId: string, value: number, url: string) => {
  const body: IVote = {
    image_id: imageId,
    sub_id: "josiah",
    value,
  };

  try {
    const voteId = await Axios.post("votes", body);

    value === 0
      ? dislikeCat(imageId, url, voteId.data.id)
      : likeCat(imageId, url, voteId.data.id);
  } catch (error) {
    console.log(error);
  }
};
