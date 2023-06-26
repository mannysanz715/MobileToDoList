import React, {useState} from 'react'
import { ScrollView, StyleSheet, Button, Text, View } from 'react-native';

export default function App() {
const [count, setCounter] = useState(0)
function onButtonPress(){
  return setCounter(count + 1)
}
  return (
    <ScrollView >
      <View style={styles.container}>
        <Text>Daily To Do's</Text>
        <Text>The app that Lets you keep track of daily items. All in one organized place!</Text>
          <Text >Hello</Text>
        <View style={styles.buttonStyle}>
          <Button onPress={onButtonPress} title={`${count}`}/>
        </View>  
      </View>
      <View>

      </View>
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
  buttonStyle: {
    backgroundColor: '#63C5DA',
    width: 100,
    height: 50,
    textAlign : 'center',
    justifyContent : 'center',
    alignItems: "center"

  }
});
