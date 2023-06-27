import React, { useState } from "react"
import { ScrollView, StyleSheet, Button, Text, View } from 'react-native';
import NavBar from "../../components/NavBar/NavBar";
import ToDoInput from "../../components/ToDoInput/ToDoInput";
import ToDoItem from "../../components/ToDoItem/ToDoItem";
function LandingPage () {
  const { container, } = styles
  const [toDoItems, setToDoItems] = useState([])
  
  function addToDoItemsToState(newTodo){
    setToDoItems([...toDoItems, newTodo]) 
  }

  return (

    <View style={container}>
    
      <NavBar />
    
      <ToDoInput addToDo={addToDoItemsToState}/>

      {toDoItems && 
        toDoItems.map((item, idx) =>
          <ToDoItem key={idx} toDo={item}/>
          )
      }
    </View>
)
}

export default LandingPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'center',
    alignItems: 'center',
    marginTop: 0,
  },

});