export type SingleDescItem = {
  title: string;
  titleEng: string;
  icon: string;
};

export type LockType = {
  id: number;
  title: string;
  image: string;
  cardImage: string;
  price: number;
  tag: string;
  tagEng: string;
  desc: SingleDescItem[];
  description: string | null;
  descriptionEng: string | null;
  featuresListing?: string[];
  featuresListingEng?: string[];

};

export type OrderType = {
  id: 1;
  name: string;
  lastName: string;
  tel: string;
  email: string;
  city: string;
  adress: string;
  product: string;
  quantity: 1;
  total: 5300;
  isFinished: boolean;
  date: Date
};
