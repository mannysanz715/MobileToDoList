import { View, TextInput, Form, Button, Text, BackHandler } from "react-native"
import React, { useState } from "react"
function ToDoInput( { addToDo } ){
  const [formData, setFormData] = useState({
    todo: '',
  })

  const[inputValue, setInputValue] = useState('')
  function handleChange(text, name){
    setFormData({...formData, [name]: text})
    setInputValue(text)
  }

  function clearInput(){
    setInputValue('')
  }
  function handleButtonPress(){
    addToDo(formData)
    clearInput()
  }
  return (
    <View>
        <TextInput value={inputValue} onChangeText={text => handleChange(text, 'todo')} placeholder="New To Do Item"/>
        <Button title="Submit To Do" onPress={handleButtonPress}/>
    </View>
)
}

export default ToDoInput