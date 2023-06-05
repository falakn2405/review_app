import * as React from 'react';
import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';
import RootStackScreen from './screens/RootStackScreen';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExploreScreen from './screens/ExploreScreen';
import SettingsScreen from './screens/SettingScreen';
import ReviewForm from './screens/ReviewForm';

const Drawer = createDrawerNavigator();

const App = () => {
  // Initial login state
  const initialLoginState = {
    isLoading: true,
    useName: null,
    userToken: null
  };

  // Reducer function to handle login state changes
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        // Reducer case for retrieving user token
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        // Reducer case for user login
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        // Reducer case for user logout
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        // Reducer case for user registration
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      default:
        // Default case if the action type is not recognized
        return prevState;
    }
  };  

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  // Optimization technique to speed up execution
  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {
      // Function for user sign-in
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      try {
        // Store the user token in AsyncStorage
        userToken = 'signin';
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }
      // Dispatch the LOGIN action to update the login state
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async () => {
      // Function for user sign-out
      try {
        // Remove the user token from AsyncStorage
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // Dispatch the LOGOUT action to update the login state
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // Function for user sign-up
      setUserToken('signup');
      setIsLoading(false);
    }
  }), []);  

  useEffect(() => {
    // Check if the user is logged in or not
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        // Retrieve the user token from AsyncStorage
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // Dispatch the RETRIEVE_TOKEN action to update the login state
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);  

  if( loginState.isLoading ){
    // Show loading indicator while checking login state
    return(
      <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return (
    // Pass authentication context to component tree
    <AuthContext.Provider value={authContext}> 
      <NavigationContainer>
        { loginState.userToken != null ? (
          // If user is logged in, show the main app with drawer navigation
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="Review-App" component={MainTabScreen} />
            <Drawer.Screen name="Review" component={ReviewForm} />
            <Drawer.Screen name="Explore" component={ExploreScreen} />
            <Drawer.Screen name="Setting" component={SettingsScreen} />
          </Drawer.Navigator>
        ) : (
          // If user is not logged in, show the root stack screen for authentication
          <RootStackScreen/>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;