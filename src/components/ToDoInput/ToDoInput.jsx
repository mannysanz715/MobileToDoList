import { View, TextInput, Form, Button, Text, BackHandler } from "react-native"
import React, { useState } from "react"
function ToDoInput( { addToDo } ){
  const [formData, setFormData] = useState({
    todo: '',
  })

  function handleChange(text, name){
    setFormData({...formData, [name]: text})
  }

  function handleButtonPress(){
    addToDo(formData)
  }
  return (
    <View>
        <TextInput onChangeText={text => handleChange(text, 'todo')} placeholder="New To Do Item"/>
        <Button title="Submit To Do" onPress={handleButtonPress}/>
        <Text>{formData.todo}</Text>
    </View>
)
}

export default ToDoInput