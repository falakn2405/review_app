import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../components/context';

const SettingsScreen = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  // State variables to track the enabled/disabled state of various settings
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(true);

  // Function to toggle the Notifications setting
  const toggleNotifications = () => {
    setNotificationsEnabled((prevState) => !prevState);
  };

  // Function to toggle the Email Notifications setting
  const toggleEmail = () => {
    setEmailEnabled((prevState) => !prevState);
  };

  // Function to toggle the Push Notifications setting
  const togglePush = () => {
    setPushEnabled((prevState) => !prevState);
  };

  // Function to reset all settings to their default values
  const handleReset = () => {
    setNotificationsEnabled(true);
    setEmailEnabled(false);
    setPushEnabled(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Container for the Notifications setting */}
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      {/* Container for the Email Notifications setting */}
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Email Notifications</Text>
        <Switch
          value={emailEnabled}
          onValueChange={toggleEmail}
          disabled={!notificationsEnabled}
        />
      </View>

      {/* Container for the Push Notifications setting */}
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Push Notifications</Text>
        <Switch
          value={pushEnabled}
          onValueChange={togglePush}
          disabled={!notificationsEnabled}
        />
      </View>

      {/* Container for the Reset and Log Out buttons */}
      <View style={styles.button}>
        {/* Reset button */}
        <TouchableOpacity style={styles.reset} onPress={handleReset}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.reset}>
            <Text style={[styles.textSign, { color: '#fff' }]}>Reset</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Log Out button */}
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}
          style={[styles.reset, { borderColor: '#009387', borderWidth: 1, marginTop: 15 }]}
        >
          <Text style={[styles.textSign, { color: '#009387' }]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;

// Styles
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
    fontWeight: 'bold',
  },
});