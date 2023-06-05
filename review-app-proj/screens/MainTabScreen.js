import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SettingScreen from './SettingScreen';
import ExploreScreen from './ExploreScreen';

const HomeStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  // Main bottom tab navigator
  <Tab.Navigator
    initialRouteName="Home"
    shifting={true}
    sceneAnimationEnabled={false}
    activeColor="#fff"
    inactiveColor="#dc143c"
    barStyle={{ backgroundColor: 'grey' }}
  >
    {/* Home tab */}
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="home" color={color} size={26} />
        ),
      }}
    />
    {/* About tab */}
    <Tab.Screen
      name="About"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'About',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="info" color={color} size={26} />
        ),
      }}
    />
    {/* Setting tab */}
    <Tab.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        tabBarLabel: 'Setting',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="settings" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  // Stack navigator for the Home tab
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerTitleAlign: 'center'
  }}>
    {/* Home screen */}
    <HomeStack.Screen name='Home' component={HomeScreen}/>
    {/* Details screen */}
    <HomeStack.Screen name='Details' component={DetailsScreen}/>
  </HomeStack.Navigator>
);
