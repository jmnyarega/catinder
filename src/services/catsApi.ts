// third party
import Axios from "axios";

// constants
import URL from "../constants/url";
import { Cat } from "../types/cat.types";

export const getRandomCatService = async (): Promise<Cat[]> => {
  const cat = await Axios.get(URL);
  return cat.data;
};
export const likeCat = async (id: string) => {
  console.log(id);
};
export const dislikeCat = async (id: string) => {
  console.log(id);
};
