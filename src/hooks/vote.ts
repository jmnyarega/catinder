import { useEffect, useState } from "react";

// services
import { removeVottedCat } from "../services/catsApi";
import { getVotesFromLocalStorage } from "../services/store";

// types
import { Iimage } from "./../types/cat.types";

export const useVote = () => {
  const [cats, setCats] = useState<Iimage[]>([]);
  const [isLoading, setIsloading] = useState(false);

  const getVotes = () => {
    setIsloading(true);
    const votes = getVotesFromLocalStorage();

    setCats(votes);
    setIsloading(false);
  };

  const deleteVote = async (voteId: number, imageId: string) => {
    await removeVottedCat(voteId, imageId);
    getVotes();
  };

  useEffect(() => {
    getVotes();
  }, []);

  return { cats, isLoading, getVotes, deleteVote, setCats };
};
