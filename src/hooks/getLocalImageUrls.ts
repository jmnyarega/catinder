import { useState } from "react";

// services
import { getImageUrl } from "../services/localstorage";

export const useGetImageUrl = (): [string | undefined, Function] => {
  const [url, setUrl] = useState<string | undefined>("");

  const getUrl = (imageId: string) => {
    const imageUrl = getImageUrl(imageId);
    setUrl(imageUrl);
  };

  return [url, getUrl];
};
