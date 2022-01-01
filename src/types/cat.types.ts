export type Cat = {
  breeds: [];
  id: string;
  url: string;
  width: number;
  height: number;
};

export type Vote = {
  image_id: string;
  sub_id: string;
  value: number;
  url?: string;
  id?: string;
};

export type Image = {
  imageId: string | undefined;
  url: string | undefined;
};

export type Votes = {
  liked: Image[];
  disliked: Image[];
};

export type IStyles = {
  [Key: string]: React.CSSProperties;
};
