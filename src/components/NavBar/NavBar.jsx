import React from "react"
import { ScrollView, StyleSheet, Button, Text, View,  } from 'react-native';
function NavBar() {
  const {
    heading,
    navBar,
  } = styles

  return (
    <View style={navBar}>
        <Text style={heading}>Daily To Do's</Text>
    </View>
)
}

export default NavBar

const styles = StyleSheet.create({

    navBar :{
      backgroundColor: '#003F91',
      width: "100%",
      height: 80,
      textAlign: 'center',
      justifyContent : 'center',
      alignItems : "center", 
      top: 0,
    }
    ,
    heading: {
      fontSize: 22,
      fontWeight: "900",
      color: 'white',
  },

});