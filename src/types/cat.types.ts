export type ICat = {
  breeds: [];
  id: string;
  url: string;
  width: number;
  height: number;
};

export type IVote = {
  image_id: string;
  sub_id: string;
  value: number;
  url?: string;
  id?: string;
};

export type Iimage = {
  imageId: string | undefined;
  url: string | undefined;
};

export type IsaveVotes = {
  liked: Iimage[];
  disliked: Iimage[];
};

export type IStyles = {
  [Key: string]: React.CSSProperties;
};
