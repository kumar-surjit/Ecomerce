import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import FormLayout from '../../components/FormLayout';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';
import navigationStrings from '../../constants/navigationStrings';
import {showMessage} from 'react-native-flash-message';
import {registerUser} from '../../apis/registerUser';

export default class Signup extends Component {
  state = {
    isEmailValid: false,
    isPasswordValid: false,
    isNameValid: false,
    email: '',
    password: '',
    name: '',
  };

  changeState = (stateVar, isValid, newValue) => {
    console.log('inside changeState', stateVar === 'name');
    switch (stateVar) {
      case 'email':
        console.log('this is newValue:', newValue);
        this.setState({
          isEmailValid: isValid,
          email: newValue,
        });
        break;
      case 'password':
        console.log('this is newValue:', newValue);
        this.setState({
          isPasswordValid: isValid,
          password: newValue,
        });
        break;
      case 'name':
        console.log('this is newValue:', newValue);
        this.setState({
          isNameValid: isValid,
          name: newValue,
        });
        break;
      // case stateVar === 'nameInput':
      //   this.setState({

      //   });
      //   break;
      // case stateVar === 'emailInput':
      //   this.setState({

      //   });
      //   break;
      // case stateVar === 'passwordInput':
      //   this.setState({

      //   });
      //   break;
    }
  };

  checkValidity = () => {
    const {
      isEmailValid,
      isPasswordValid,
      isNameValid,
      email,
      password,
      name,
    } = this.state;
    console.log(email, password, name);
    let data = {
      email: email,
      languageCode: 'EN',
      signupType: 'APP',
      password: password,
      name: name,
    };
    if (isEmailValid && isPasswordValid && isNameValid) {
      this.signUpUser(data);
      console.log('Valid');
    } else {
      showMessage({
        message: 'Invalid Details',
        description: 'Please check the entered fields',
        type: 'danger',
      });
      console.log('Not Valid');
    }
  };

  signUpUser = (value) => {
    console.log('inside signup user');
    registerUser(value)
      .then((res) => {
        console.log('response', res);
        showMessage({
          type: 'success',
          message: 'Successfully Signed in',
        });
        this.props.navigation.navigate(navigationStrings.HomeTab);
      })
      .catch((err) => {
        console.log('error', err);
        showMessage({
          type: 'danger',
          message: "Couldn't Signed in",
        });
      });
  };

  render() {
    // console.log(this.props.navigation);

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
