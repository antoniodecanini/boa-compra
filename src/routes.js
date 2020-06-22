import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/Home';
import NewList from './pages/NewList';

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
          name = "NewList"
          component = { NewList }
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;