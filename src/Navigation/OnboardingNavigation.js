import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './RootNavigation';
import Login from '../Components/Authentication/Login/Login';
const Stack = createStackNavigator();

export default () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none" initialRouteName={'Welcome'}>
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
