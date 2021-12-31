import { useEffect, useState } from "react";

// services
import { getRandomCatService } from "../services/catsApi";

// types
import { Cat } from "./../types/cat.types";

export const useGetRandomCats = (): [Cat, boolean, Function] => {
  const [cat, setCat] = useState<Cat[]>([]);
  const [isLoading, setIsloading] = useState(false);

  const getRandomCat = async () => {
    setIsloading(true);
    const randomCat = await getRandomCatService();
    setCat(randomCat);
    setIsloading(false);
  };

  useEffect(() => {
    getRandomCat();
  }, []);

  return [cat[0], isLoading, getRandomCat];
};
