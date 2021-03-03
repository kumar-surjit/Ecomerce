import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function FormButton(props) {

  const authenticate = () => {
    if(props.text === "Login")
        props.checkValidUser();
    else if (props.text === "Signup")
        props.checkValidity();
  }

  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={authenticate}> 
      <LinearGradient colors={['#FA578E', '#FDA88E']} 
        style={styles.gradientStyle} 
        start={[0 , 0]}
        end={[1,0]}
        >
        <Text style={styles.buttonText}>{props.text}</Text> 
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradientStyle:{
    borderRadius: 10
  },
  buttonStyle: {
    marginHorizontal:35,
  },
  buttonText:{
    padding: 15,
    color: "#fff", 
    textAlign: "center"
  }
});
