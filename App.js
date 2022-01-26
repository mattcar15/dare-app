import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DareScreen from './DareScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import AuthScreen from './AuthScreen';

const Stack = createNativeStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 0,
  },
};

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Auth" screenOptions={{
        headerShown: false,
        animationEnabled: false,
        transitionSpec: {
          open: config,
          close: config,
        },
      }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dare" component={DareScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;