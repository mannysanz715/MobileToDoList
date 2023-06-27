import { View, TextInput, Text } from "react-native"
import React, { useState } from "react"
function ToDoInput(){
  return (
    <View>
      <TextInput placeholder="New To Do Item" />
      <Text>{`${isChecked}`}</Text>
    </View>
)
}

export default ToDoInput