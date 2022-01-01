import { useEffect, useState } from "react";

// services
import { getRandomCatService } from "../services/catsApi";

// types
import { ICat } from "./../types/cat.types";

export const useGetCats = () => {
  const [cat, setCat] = useState<ICat>();
  const [isLoading, setIsloading] = useState(false);

  const fetchCat = async () => {
    setIsloading(true);
    const randomCat = await getRandomCatService();
    setCat(randomCat[0]);
    setIsloading(false);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return { cat, isLoading, fetchCat, setCat };
};
