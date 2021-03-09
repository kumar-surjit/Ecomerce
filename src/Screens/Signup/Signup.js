import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import FormLayout from '../../components/FormLayout';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';
import navigationStrings from '../../constants/navigationStrings';
import {showMessage} from 'react-native-flash-message';

export default class Signup extends Component {
  state = {
    isEmailValid: false,
    isPasswordValid: false,
    isNameValid: false,
  };

  changeState = (stateVar, newValue) => {
    if (stateVar === 'email') {
      this.setState({
        isEmailValid: newValue,
      });
    } else if (stateVar === 'password') {
      this.setState({
        isPasswordValid: newValue,
      });
    } else if (stateVar === 'name') {
      this.setState({
        isNameValid: newValue,
      });
    }
  };

  checkValidity = () => {
    const {isEmailValid, isPasswordValid, isNameValid} = this.state;
    if (isEmailValid && isPasswordValid && isNameValid) {
      console.log('Valid');
      this.props.navigation.navigate(navigationStrings.HomeTab);
    } else {
      showMessage({
        message: 'Invalid Details',
        description: 'Please check the entered fields',
        type: 'danger',
      });
      console.log('Not Valid');
    }
  };

  render() {
    {
      console.log(this.props.navigation);
    }
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{paddingVertical: 30}}>
          <FormLayout
            navigationProp={this.props.navigation}
            heading="Create Account,"
            subHeading="Sign up to get started!"
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelStyle}> Full Name :</Text>
          <Input
            secureText={false}
            type="name"
            pattern="^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*"
            tabName="signup"
            updateState={this.changeState}
          />
          <Text style={[styles.labelStyle, {marginTop: 10}]}> Email ID :</Text>
          <Input
            secureText={false}
            type="email"
            tabName="signup"
            pattern="[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}"
            updateState={this.changeState}
          />
          <Text style={[styles.labelStyle, {marginTop: 10}]}> Password :</Text>
          <Input
            secureText={true}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
            type="password"
            tabName="signup"
            updateState={this.changeState}
          />
        </View>
        <View style={{marginBottom: 20}}>
          <FormButton text="Signup" checkValidity={this.checkValidity} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputFieldContainer: {
    paddingHorizontal: 35,
    marginBottom: 45,
  },

  labelStyle: {
    color: '#acb5be',
    fontWeight: '500',
  },
});
