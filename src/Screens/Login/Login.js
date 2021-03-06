import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {StackActions} from '@react-navigation/native';
import FormLayout from '../../components/FormLayout';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';
import navigationStrings from '../../constants/navigationStrings';
import {showMessage} from 'react-native-flash-message';

export default class Login extends Component {
  state = {
    emailValidation: false,
    passwordValidation: false,
    isSecure: true,
  };

  changeEmailValidation = (newValue) => {
    this.setState({
      emailValidation: newValue,
    });
  };

  changePasswordValidation = (newValue) => {
    this.setState({
      passwordValidation: newValue,
    });
  };

  changeState = (stateVar, isValid, newValue) => {
    switch (stateVar) {
      case 'secureState':
        // console.log("i'm heere");
        this.setState({
          isSecure: !this.state.isSecure,
        });
        break;
    }
  };

  checkValidUser = () => {
    const {emailValidation, passwordValidation} = this.state;
    if (emailValidation && passwordValidation) {
      console.log('Valid');
      this.props.navigation.dispatch(
        StackActions.replace(navigationStrings.HomeTab),
      );
    } else {
      showMessage({
        message: 'Invalid Credentials',
        description: 'Please check the email and password',
        type: 'danger',
      });
      console.log('Not Valid');
    }
  };

  render() {
    const {isSecure} = this.state;
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.headingContainer}>
          <FormLayout
            navigationProp={this.props.navigation}
            heading="Welcome,"
            subHeading="Sign in to continue!"
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.labelStyle}> Email ID :</Text>
          <Input
            secureText={false}
            tabName="login"
            changeEmailValidation={this.changeEmailValidation}
            type="email"
          />
          <Text style={[styles.labelStyle, {marginTop: 10}]}> Password :</Text>
          <Input
            secureText={isSecure}
            tabName="login"
            changePasswordValidation={this.changePasswordValidation}
            type="password"
            updateState={this.changeState}
          />
        </View>
        <View style={{marginBottom: 20}}>
          <FormButton text="Login" checkValidUser={this.checkValidUser} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputFieldContainer: {
    flex: 0.45,
    paddingHorizontal: 35,
    marginBottom: 80,
  },

  headingContainer: {
    marginBottom: 50,
    paddingTop: 20,
  },

  labelStyle: {
    color: '#acb5be',
    fontWeight: '500',
  },
});
