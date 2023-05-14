import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home2" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
