import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../components/context';

const SettingsScreen = ({navigation}) => {
  const {signOut} = React.useContext(AuthContext);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled((prevState) => !prevState);
  };

  const toggleEmail = () => {
    setEmailEnabled((prevState) => !prevState);
  };

  const togglePush = () => {
    setPushEnabled((prevState) => !prevState);
  };

  const handleReset = () => {
    setNotificationsEnabled(true);
    setEmailEnabled(false);
    setPushEnabled(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Email Notifications</Text>
        <Switch
          value={emailEnabled}
          onValueChange={toggleEmail}
          disabled={!notificationsEnabled}
        />
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Push Notifications</Text>
        <Switch
          value={pushEnabled}
          onValueChange={togglePush}
          disabled={!notificationsEnabled}
        />
      </View>

      <View style={styles.button}>
          <TouchableOpacity style={styles.reset}
              onPress={handleReset}> 
          <LinearGradient colors={['#08d4c4', '#01ab9d']} 
              style={styles.reset} >
              <Text style={[styles.textSign, {color:'#fff'}]}>
                  Reset</Text>
          </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {signOut()}}
              style={[styles.reset, {borderColor:'#009387', borderWidth: 1, marginTop: 15}]}
          >
              <Text style={[styles.textSign, {color: '#009387'}]}>Log Out</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  reset: {
    width: 95,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});




// import React, { useState, useEffect } from 'react';
// import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
// import { useColorScheme } from 'react-native-appearance';

// const SettingsScreen = () => {
//   const colorScheme = useColorScheme();
//   const isDarkModeEnabled = colorScheme === 'dark';

//   const [darkModeEnabled, setDarkModeEnabled] = useState(isDarkModeEnabled);
//   const [notificationsEnabled, setNotificationsEnabled] = useState(true);

//   useEffect(() => {
//     // Update dark mode state when color scheme changes
//     setDarkModeEnabled(isDarkModeEnabled);
//   }, [isDarkModeEnabled]);

//   const toggleDarkMode = () => {
//     setDarkModeEnabled((prevState) => !prevState);
//   };

//   const toggleNotifications = () => {
//     setNotificationsEnabled((prevState) => !prevState);
//   };

//   const handleReset = () => {
//     setDarkModeEnabled(isDarkModeEnabled);
//     setNotificationsEnabled(true);
//     // Add additional logic to reset other settings if needed
//     console.log('Settings reset');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Settings</Text>

//       <View style={styles.settingContainer}>
//         <Text style={styles.settingText}>Dark Mode</Text>
//         <Switch
//           value={darkModeEnabled}
//           onValueChange={toggleDarkMode}
//         />
//       </View>

//       <View style={styles.settingContainer}>
//         <Text style={styles.settingText}>Notifications</Text>
//         <Switch
//           value={notificationsEnabled}
//           onValueChange={toggleNotifications}
//         />
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleReset}>
//         <Text style={styles.buttonText}>Reset Settings</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SettingsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   settingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginBottom: 20,
//   },
//   settingText: {
//     fontSize: 18,
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     backgroundColor: '#007AFF',
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
// });

