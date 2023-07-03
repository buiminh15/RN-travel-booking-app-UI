import {Hotel} from './Hotel';

export type MainStackParamList = {
  MainStackScreen: BottomTabNavigatorParamList;
  DetailScreen: {
    item: Hotel;
  };
  ViewAllScreen: {
    name: string;
  };
  EditProfileScreen: undefined;
};

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Booking: undefined;
  WatchList: undefined;
  Profile: undefined;
};

export type BottomIconType = {
  focused: boolean;
  color: string;
  size: number;
};
