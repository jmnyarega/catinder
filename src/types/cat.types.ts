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
};

export type Votes = {
  liked: Array<string>;
  disliked: Array<string>;
};
