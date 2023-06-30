import React from 'react';
import {
  BookingScreen,
  HomeScreen,
  ProfileScreen,
  WatchListScreen,
} from '../src/screens';
import {
  BottomIconType,
  BottomTabNavigatorParamList,
} from '../src/types/navigation';
import BottomIcon from '../src/components/BottomIcon';

type BottomTypes = keyof BottomTabNavigatorParamList;
type BottomTabsType = {
  id: number;
  name: BottomTypes;
  component: () => React.JSX.Element;
  icon: ({focused, color, size}: BottomIconType) => React.JSX.Element;
};
const BOTTOM_NAVS: BottomTabsType[] = [
  {
    id: 1,
    name: 'Home',
    component: HomeScreen,
    icon: ({focused, color, size}: BottomIconType) => (
      <BottomIcon
        focused={focused}
        color={color}
        size={size}
        name="Home"
        iconName="home-outline"
      />
    ),
  },
  {
    id: 2,
    name: 'Booking',
    component: BookingScreen,
    icon: ({focused, color, size}: BottomIconType) => (
      <BottomIcon
        focused={focused}
        color={color}
        size={size}
        name="Booking"
        iconName="calendar-outline"
      />
    ),
  },
  {
    id: 3,
    name: 'WatchList',
    component: WatchListScreen,
    icon: ({focused, color, size}: BottomIconType) => (
      <BottomIcon
        focused={focused}
        color={color}
        size={size}
        name="WatchList"
        iconName="bookmark-outline"
      />
    ),
  },
  {
    id: 4,
    name: 'Profile',
    component: ProfileScreen,
    icon: ({focused, color, size}: BottomIconType) => (
      <BottomIcon
        focused={focused}
        color={color}
        size={size}
        name="Profile"
        iconName="profile-outline"
      />
    ),
  },
];

export {BOTTOM_NAVS};
