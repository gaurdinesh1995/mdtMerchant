import React from 'react';
import { Platform, BackHandler, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawerr from '../Components/Drawer/Drawer';
import { navigationRef } from './RootNavigation';
import Dashboard from '../Components/Dashboard/Dashboard';
import Tabs from '../Components/Tabs/Tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function backButtonHandler() {
  return true;
}
BackHandler.addEventListener('hardwareBackPress', backButtonHandler);

function TabsStack() {
  const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator
      initialRouteName="tab"
      headerMode={'none'}
      screenOptions={
        Platform.OS === 'ios'
          ? { headerShown: false, gestureEnabled: false }
          : { headerShown: false }
      }>
      <Stack.Screen
        name="tab"
        component={Tabs}
        options={{ headerShown: false }}
        initialParams={{ space: insets }}
      />

    </Stack.Navigator>
  );
}



export const DashboardStack = () => {
  const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      headerMode={'none'}
      screenOptions={
        Platform.OS === 'ios'
          ? { headerShown: false, gestureEnabled: false }
          : { headerShown: false }
      }>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
        initialParams={{ space: insets }}
      />

    </Stack.Navigator>
  );
}



export default () => {
  const dimensions = useWindowDimensions();
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
          drawerStyle={{ width: "70%" }}
          drawerContent={(props) => <Drawerr {...props} />}>
          <Drawer.Screen name="Feed" component={TabsStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
