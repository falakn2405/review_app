import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SettingScreen from './SettingScreen';
import ExploreScreen from './ExploreScreen';
import { Drawer } from 'react-native-paper';

const HomeStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      sceneAnimationEnabled={false}
      activeColor="#fff"
      inactiveColor="#dc143c"
      barStyle={{ backgroundColor: 'grey' }}
    >
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
      <HomeStack.Screen name='Home' component={HomeScreen}/>
      <HomeStack.Screen name='Details' component={DetailsScreen}/>
    </HomeStack.Navigator>
);
  