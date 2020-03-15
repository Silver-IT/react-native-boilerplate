import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AdminNavigator, ClientNavigator } from './drawer-navigators';
import { AuthNavigator } from './stack-navigators';
import { connectIsAuth } from '../Redux/connects';

function Navigator({ authenticated }) {
  const RootNavigator = authenticated ? ClientNavigator : AuthNavigator;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default connectIsAuth(Navigator);
