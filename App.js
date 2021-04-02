import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RouteStack from './src/routes/RouteStack';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store';

const Stack = createStackNavigator();

export default function AppWrapper () {

  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
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
