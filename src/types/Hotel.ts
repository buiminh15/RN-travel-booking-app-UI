export type Hotel = {
  id: string;
  image: string;
  title: string;
  address: string;
  price: number;
  rating: number;
  description: string;
};

export type Schedule = Hotel & {
  scheduledDate: string;
};

export type NearbyHotel = {
  id: string;
  name: string;
  data: Hotel[] | Schedule[];
};
