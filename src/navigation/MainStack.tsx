import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DetailScreen, ViewAllScreen} from '../screens';
import {MainStackParamList} from '../types/navigation';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator<MainStackParamList>();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainStackScreen" component={BottomTabNavigator} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="ViewAllScreen" component={ViewAllScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
