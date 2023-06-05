import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import MainTabScreen from './MainTabScreen';

// Create a native stack navigator
const RootStack = createNativeStackNavigator();

// Define the root stack screen component
const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode='none'>
    {/* SplashScreen */}
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    {/* Home */}
    <RootStack.Screen name="Home" component={MainTabScreen} />
    {/* SignInScreen */}
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    {/* SignUpScreen */}
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
