import { useEffect, useState } from "react";

// services
import { getVottedCats, removeVottedCat } from "../services/catsApi";
import { getImageUrl } from "../services/store";

// types
import { IVote } from "./../types/cat.types";

export const useVote = () => {
  const [cats, setCats] = useState<IVote[]>([]);
  const [isLoading, setIsloading] = useState(false);

  const getVotes = async () => {
    setIsloading(true);
    const cats = await getVottedCats();
    const catsWithUrl = cats.map((cat: IVote) => ({
      ...cat,
      url: getImageUrl(cat.image_id),
    }));
    setCats(catsWithUrl);
    setIsloading(false);
  };

  const deleteVote = async (voteId: number, imageId: string) => {
    await removeVottedCat(voteId, imageId);
    await getVotes();
  };

  useEffect(() => {
    getVotes();
  }, []);

  return { cats, isLoading, getVotes, deleteVote, setCats };
};
