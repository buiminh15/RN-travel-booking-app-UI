import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {vs} from 'react-native-size-matters';
import {BottomTabNavigatorParamList} from '../types/navigation';
import {BOTTOM_NAVS} from '../../constants/config';
import {COLORS, SIZES} from '../../constants';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: vs(SIZES.font * 5),
        },
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          position: 'absolute',
          bottom: 10,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
      }}>
      {BOTTOM_NAVS.map(nav => (
        <Tab.Screen
          key={`bottom-nav-${nav.id}`}
          name={nav.name}
          component={nav.component}
          options={{
            tabBarLabel: nav.name,
            tabBarIcon: nav.icon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
