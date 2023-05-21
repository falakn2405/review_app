import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerContent } from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import RootStackScreen from './screens/RootStackScreen';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <RootStackScreen/> */}
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Review-App" component={MainTabScreen} />
        {/* <Drawer.Screen name="SplashScreen" component={SplashScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
