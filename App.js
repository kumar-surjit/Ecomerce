import React, {Component} from 'react';
import {View} from 'react-native';
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
