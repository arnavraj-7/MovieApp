import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './../../components/tabbar'; // 
import Index from './index';
import Search from './Search';
import Saved from './Saved';
import Chat from './chat';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Index} />
      <Tab.Screen name="Search" component={Search} />
      {/* <Tab.Screen name="Saved" component={Saved} /> */}
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}
