import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/Home';
import ShoppingList from './pages/ShoppingList';

const AppStack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        initialRouteName="Home"
        screenOptions = {{
          headerShown: false,
        }}
      >
        <AppStack.Screen
          name = "Home"
          component = { HomeScreen }
        />

        <AppStack.Screen
          name = "ShoppingList"
          component = { ShoppingList }
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;