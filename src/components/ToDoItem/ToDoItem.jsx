import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BouceyCheckbox from "react-native-bouncy-checkbox"

function ToDoItem ({toDo}) {
  const [isChecked, setIsChecked] = useState(false)
  function handleCheckPress(){
    setIsChecked(!isChecked)
  }
  return (
    <View style={styles.container}>
      <BouceyCheckbox onPress={handleCheckPress}/>
      <Text>{toDo.todo}</Text>
    </View>
)
}

export default ToDoItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent : 'center',
    alignItems: 'center',
    marginTop: 0,
  },
});