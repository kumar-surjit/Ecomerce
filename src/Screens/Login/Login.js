import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import FormLayout from '../../components/formLayout';
import Input from '../../components/input';
import FormButton from '../../components/FormButton';
import navigationStrings from '../../constants/navigationStrings';
import {showMessage} from 'react-native-flash-message';

export default class Login extends Component {
  state = {
    emailValidation: false,
    passwordValidation: false,
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

  checkValidUser = () => {
    const {emailValidation, passwordValidation} = this.state;
    if (emailValidation && passwordValidation) {
      console.log('Valid');
      this.props.navigation.navigate(navigationStrings.HomeTab);
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
            secureText={true}
            tabName="login"
            changePasswordValidation={this.changePasswordValidation}
            type="password"
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
