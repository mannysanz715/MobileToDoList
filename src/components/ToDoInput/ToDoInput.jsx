import { View, TextInput, Form, Button, Text, BackHandler } from "react-native"
import React, { useState } from "react"
function ToDoInput( { addToDo } ){
  const [formData, setFormData] = useState({
    todo: '',
  })
  //! Trying to set function to clear input field on submit without changing the state
  const[inputValue, setInputValue] = useState('')
  function handleChange(text, name){
    setFormData({...formData, [name]: text})
  }
  function clearInput(){
    setFormData
  }
  function handleButtonPress(){
    addToDo(formData)
    
  }
  return (
    <View>
        <TextInput value={formData.todo} onChangeText={text => handleChange(text, 'todo')} placeholder="New To Do Item"/>
        <Button title="Submit To Do" onPress={handleButtonPress}/>
    </View>
)
}

export default ToDoInput