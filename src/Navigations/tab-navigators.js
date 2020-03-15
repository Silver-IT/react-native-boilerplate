import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  ReservationNavigator,
  ContactUsNavigator,
  HouseAccessNavigator,
  DirectionsNavigator,
} from './stack-navigators';

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ size, color }) => {
    let iconName = 'ios-home';
    if (route.name === 'ReservationTab') {
      iconName = 'md-home';
    } else if (route.name === 'HouseAccessTab') {
      iconName = 'md-open';
    } else if (route.name === 'DirectionsTab') {
      iconName = 'md-arrow-forward';
    } else if (route.name === 'ContactUsTab') {
      iconName = 'md-contacts';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});
const tabBarOptions = { activeTintColor: '#e91e63', inactiveTintColor: 'gray', tabStyle: { paddingVertical: 5 } };

export const AdminTabNavigator = () => (
  <Tab.Navigator initialRouteName="ReservationTab" screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
    <Tab.Screen name="ReservationTab" component={ContactUsNavigator} />
    <Tab.Screen name="ContactTab" component={ContactUsNavigator} />
    <Tab.Screen name="AboutTab" component={ContactUsNavigator} />
  </Tab.Navigator>
);

export const ClientTabNavigator = () => (
  <Tab.Navigator initialRouteName="ReservationTab" screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
    <Tab.Screen name="ReservationTab" options={{ tabBarLabel: 'Reservation' }} component={ReservationNavigator} />
    <Tab.Screen name="HouseAccessTab" options={{ tabBarLabel: 'House Access' }} component={HouseAccessNavigator} />
    <Tab.Screen name="DirectionsTab" options={{ tabBarLabel: 'Directions' }} component={DirectionsNavigator} />
    <Tab.Screen name="ContactUsTab" options={{ tabBarLabel: 'Contact Us' }} component={ContactUsNavigator} />
  </Tab.Navigator>
);
