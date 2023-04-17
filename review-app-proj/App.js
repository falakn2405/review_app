import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'red', flex: 0.15}}>
        <Text style={{marginTop: 20, fontSize: 32, textAlign: 'center', verticalAlign: 'middle'}}>Spectacles</Text>
        <Text style={{fontSize: 16, textAlign: 'center', verticalAlign: 'middle'}}>Review Mobile App</Text>
      </View>
      <View style={{backgroundColor: 'beigo', flex: 0.55}}>
        <Text style={{marginTop: 25, padding: 30, backgroundColor: 'darkgrey', fontSize: 24}}>Home</Text>
        <Text style={{marginTop: 25, padding: 30, backgroundColor: 'darkgrey', fontSize: 24}}>About</Text>
        <Text style={{marginTop: 25, padding: 30, backgroundColor: 'darkgrey', fontSize: 24}}>Review</Text>
      </View>
      <View style={{backgroundColor: 'beigo', flex: 0.30}}>
        <Text style={{marginTop: 20, padding: 17, backgroundColor: 'grey', textAlign: 'center', fontSize: 20}}>LogIn</Text>
        <Text style={{marginTop: 20, padding: 17, backgroundColor: 'grey', textAlign: 'center', fontSize: 20}}>SignUp</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


