import React, { useState } from 'react'
import { View, Text } from 'react-native'
import BouceyCheckbox from "react-native-bouncy-checkbox"

function ToDoItem (toDo) {
  const [isChecked, setIsChecked] = useState(false)
  function handleCheckPress(){
    setIsChecked(!isChecked)
  }
  return (
    <View>
      <BouceyCheckbox onPress={handleCheckPress}/>
    </View>
)
}

export default ToDoItem