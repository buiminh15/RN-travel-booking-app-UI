import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DetailScreen, EditProfileScreen, ViewAllScreen} from '../screens';
import {MainStackParamList} from '../types/navigation';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator<MainStackParamList>();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MainStackScreen">
      <Stack.Screen name="MainStackScreen" component={BottomTabNavigator} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="ViewAllScreen" component={ViewAllScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
