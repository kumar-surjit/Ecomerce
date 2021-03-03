import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from './src/components/input';
import Routes from './src/navigation/Routes';
import MainStack from './src/navigation/MainStack';
import FlashMessage from 'react-native-flash-message';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainStack />
        <FlashMessage position="top" />
      </View>
    );
  }
}
