import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerContent } from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import RootStackScreen from './screens/RootStackScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen/>
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Review-App" component={MainTabScreen} />
<<<<<<< Updated upstream
        
      </Drawer.Navigator> */}
=======
        {/* <Drawer.Screen name="Review-Details" component={DetailsScreen} /> */}
      </Drawer.Navigator>
>>>>>>> Stashed changes
    </NavigationContainer>
  );
}

export default App;
