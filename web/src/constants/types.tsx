export type marketingItemType = {
  id: number;
  icon: string;
  title: string;
  desc: string;
};
export type foodCardType = {
  id?: number;
  imgUrl: string;
  foodName: string;
  price: number;
  categoryName?: string;
  ingredients?: string[];
  discount?: number;
};

export type categoryArrayType = {
  id?: number;
  categoryName: string;
};
