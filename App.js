import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DareScreen from './DareScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import AuthScreen from './AuthScreen';
import CreateScreen from './CreateScreen';

const Stack = createStackNavigator();

function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator  screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      >
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dare" component={DareScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;