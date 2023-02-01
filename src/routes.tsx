import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import CreateMacros from './pages/createMacros';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateMacros"
        component={CreateMacros}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default Routes;
