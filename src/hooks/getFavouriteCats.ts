import { useEffect, useState } from "react";

// services
import { getFavouriteCats, removeFavouriteCat } from "../services/catsApi";
import { getImageUrl } from "../services/localstorage";

// types
import { Vote } from "./../types/cat.types";

export const useGetFavouriteCats = (): [
  Vote[],
  boolean,
  Function,
  Function
] => {
  const [cats, setCats] = useState<Vote[]>([]);
  const [isLoading, setIsloading] = useState(false);

  const getFavourites = async () => {
    setIsloading(true);
    const favouriteCat = await getFavouriteCats();
    const favouriteCatWithUrl = favouriteCat.map((cat: Vote) => ({
      ...cat,
      url: getImageUrl(cat.image_id),
    }));
    setCats(favouriteCatWithUrl);
    setIsloading(false);
  };

  const removeFavourite = async (voteId: number, imageId: string) => {
    await removeFavouriteCat(voteId, imageId);
    await getFavourites();
  };

  useEffect(() => {
    getFavourites();
  }, []);

  return [cats, isLoading, getFavourites, removeFavourite];
};
