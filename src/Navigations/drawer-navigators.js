import React from 'react';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { ClientTabNavigator, AdminTabNavigator } from './tab-navigators';
import { ProfileNavigator } from './stack-navigators';

import { connectAuth } from '../Redux/connects';

const Drawer = createDrawerNavigator();

export const AdminNavigator = () => (
  <Drawer.Navigator initialRouteName="TabDrawer">
    <Drawer.Screen name="TabDrawer" component={AdminTabNavigator}/>
    <Drawer.Screen name="ProfileDrawer" component={ProfileNavigator}/>
  </Drawer.Navigator>
);

const clientDrawContent = ({ navigation, logout }) => (
  <DrawerContentScrollView>
    <DrawerItem label="Management" onPress={() => navigation.navigate('ManagementDrawer') }/>
    <DrawerItem label="Profile" onPress={() => navigation.navigate('ProfileDrawer')}/>
    <DrawerItem label="Logout" onPress={() => logout() }/>
  </DrawerContentScrollView>
);
const ClientDrawContent = connectAuth(clientDrawContent);

export const ClientNavigator = () => (
  <Drawer.Navigator initialRouteName="ManagementDrawer" drawerContent={props => <ClientDrawContent {...props} />}>
    <Drawer.Screen name="ManagementDrawer" component={ClientTabNavigator}/>
    <Drawer.Screen name="ProfileDrawer" component={ProfileNavigator}/>
  </Drawer.Navigator>
);
