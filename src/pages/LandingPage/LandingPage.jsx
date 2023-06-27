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
      <ScrollView>
        {toDoItems && 
          toDoItems.map((item, idx) =>
          <ToDoItem key={idx} toDo={item}/>
          )
        }
      </ScrollView>

      <ToDoInput style={styles.bottomView} addToDo={addToDoItemsToState}/>

    </View>
)
}

export default LandingPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'space-between' ,
    alignItems: 'center',
    marginTop: 0,
    width: '100%',
    height: '100%'
  },
  bottomView: {
    flex: 1,
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});