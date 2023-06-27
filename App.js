//? Imports
import { ScrollView, StyleSheet,StatusBar, Button, Text, View } from 'react-native';

//? Page Imports
import LandingPage from './src/pages/LandingPage/LandingPage';

//? Component Imports


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#003F91"
      />
      <LandingPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'center',
    alignItems: 'center',
    width: '100%',
  },

});
