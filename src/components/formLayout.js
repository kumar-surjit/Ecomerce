import React from 'react';
import {Text, View, StyleSheet, ImageBackground, Pressable} from 'react-native';
import imagePath from '../../imagePath';
import {LinearGradient} from 'expo-linear-gradient';

export default function FormLayout(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.heading}</Text>
      <Text style={styles.subHeading}>{props.subHeading}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 20,
    color: '#B7BFC7',
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    flex: 0.2,
    marginTop: 55,
  },
  bgImageStyle: {
    resizeMode: 'cover',
    flex: 1,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
    zIndex: -1,
    borderRadius: 20,
  },
});
