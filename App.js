import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import RouteStack from './src/routes/RouteStack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function AppWrapper () {

  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}


const App = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login">
      {RouteStack.map(route => (
        <Stack.Screen key={route.path} name={route.path} component={route.component} />
      ))}
      {/* <Stack.Screen name="home" component={tabNavigation} /> */}
    </Stack.Navigator>

  );
}
