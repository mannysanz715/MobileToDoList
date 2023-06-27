import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BouceyCheckbox from "react-native-bouncy-checkbox"

function ToDoItem ({toDo}) {
  const [toDoState, setToDoState] = useState({
    todo : toDo.todo, isChecked : false,
  })
  function handleCheckPress(){
    setToDoState({...toDoState, isChecked : !toDoState.isChecked})
  }
  
  return (
    <View style={styles.container}>
      <BouceyCheckbox onPress={handleCheckPress}/>
      <Text style={toDoState.isChecked && styles.slashed}>{toDo.todo}</Text>
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
  slashed:{
    textDecorationLine : 'line-through',
    color : 'lightgrey',
  }
});