//? Imports
import { ScrollView, StyleSheet,StatusBar, Button, Text, View } from 'react-native';

//? Page Imports
import LandingPage from './src/pages/LandingPage/LandingPage';

//? Component Imports


export default function App() {
  return (
    <ScrollView >
      <StatusBar
        animated={true}
        backgroundColor="#003F91"
      />
      <LandingPage />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'center',
    alignItems: 'center',
    marginTop: 110,
  },

});
