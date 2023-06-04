import * as React from 'react';

import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerContent } from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';
import RootStackScreen from './screens/RootStackScreen';


import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';

import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailsScreen from './screens/DetailsScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  const initialLoginState = {
    isLoading: true,
    useName: null,
    userToken: null
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  //Optimization technique to speed up execution
  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      try{
        userToken = 'signin';
        await AsyncStorage.setItem('userToken', userToken)
      } catch(e) {
        console.log(e);
      }
      dispatch({type:'LOGIN', id:userName, token:userToken});
    },
    signOut: async() => {
      try{
        await AsyncStorage.removeItem('userToken')
      } catch(e) {
        console.log(e);
      }
      dispatch({type:'LOGOUT'});
    },
    signUp: () => {
      setUserToken('signup');
      setIsLoading(false);
    }
  }), []);

  useEffect(() => {
    //Will check if user is loged in or not
    setTimeout(async() => {
      let userToken;
      userToken = null
      try{
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({type:'RETRIEVE_TOKEN', token:userToken});
    }, 1000);
  }, []);

  if( loginState.isLoading ){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return (
    //Passing context to compenet tree
    <AuthContext.Provider value={authContext}> 
      <NavigationContainer>
        { loginState.userToken != null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="Review-App" component={MainTabScreen} />
            <Drawer.Screen name="Detail" component={DetailsScreen} />
          </Drawer.Navigator>
        ) 
      :
        <RootStackScreen/>
      }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
