import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Input(props) {
  const [isValid, setValidity] = useState(false);
  const [isEmpty, setEmptyState] = useState(true);
  const textHandlerForSignup = (value) => {
    if (value === '') {
      setEmptyState(true);
      return;
    } else setEmptyState(false);
    if (props.type === 'name') {
      nameValidation(value);
      return;
    }
    let regex;
    if (props.type === 'email') regex = new RegExp(props.pattern, 'i');
    else regex = new RegExp(props.pattern);
    if (regex.test(value)) {
      console.log('Valid');
      if (props.type === 'email') {
        props.updateState('email', true, value);
        // props.updateState('emailInput', value);
      } else if (props.type === 'password') {
        props.updateState('password', true, value);
        // props.updateState('passwordInput', value);
      }
      setValidity(true);
    } else {
      console.log('Not Valid');
      if (props.type === 'email') {
        props.updateState('email', false, value);
        // props.updateState('emailInput', value);
      } else if (props.type === 'password') {
        props.updateState('password', false, value);
        // props.updateState('passwordInput', value);
      }
      setValidity(false);
    }
    // console.log(props.pattern);
  };

  const nameValidation = (value) => {
    let regex = new RegExp(props.pattern);
    if (regex.test(value)) {
      console.log('Valid Name');
      props.updateState('name', true, value);
      // props.updateState('nameInput', value);
      setValidity(true);
    } else {
      console.log('Not Valid Name');
      props.updateState('name', false, value);
      // props.updateState('nameInput', value);
      setValidity(false);
    }
  };

  const textHandlerForLogin = (value) => {
    if (value === '') {
      setEmptyState(true);
      return;
    } else setEmptyState(false);
    if (props.type === 'email') {
      if (value === 'admin@code-brew.com') props.changeEmailValidation(true);
      else props.changeEmailValidation(false);
    } else if (props.type === 'password') {
      if (value === 'Root123!@#') props.changePasswordValidation(true);
      else props.changePasswordValidation(false);
    }
  };

  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <TextInput
          placeholder={props.placeholder}
          style={styles.fieldStyle}
          secureTextEntry={props.secureText}
          onChangeText={(value) => {
            if (props.tabName === 'signup') textHandlerForSignup(value);
            else if (props.tabName === 'login') textHandlerForLogin(value);
          }}
        />
        {(() => {
          if (props.type === 'password' && !isEmpty) {
            if (props.secureText)
              return (
                <FontAwesome5
                  name="eye-slash"
                  size={15}
                  color="gray"
                  style={styles.eyeStyle}
                  onPress={() =>
                    props.updateState('secureState', true, 'hello')
                  }
                />
              );
            else
              return (
                <FontAwesome5
                  name="eye"
                  size={15}
                  color="gray"
                  style={styles.eyeStyle}
                  onPress={() =>
                    props.updateState('secureState', true, 'hello')
                  }
                />
              );
          }
        })()}

        {(() => {
          if (
            props.type === 'password' ||
            props.type === 'email' ||
            props.type === 'name'
          )
            if (!isEmpty) {
              if (isValid) {
                return (
                  <FontAwesome5
                    name="check"
                    size={15}
                    color="#32c671"
                    style={styles.IconStyle}
                  />
                );
              } else {
                return (
                  <FontAwesome5
                    name="times"
                    size={15}
                    color="#fe0000"
                    style={styles.IconStyle}
                  />
                );
              }
            }
        })()}
      </View>
      {(() => {
        if (props.type === 'password' && props.tabName === 'signup')
          if (!isValid) {
            return (
              <Text style={{color: '#fe0000'}}>
                *Must contain an uppercase, a number and a special character
              </Text>
            );
          }
      })()}
    </View>
  );
}
const styles = StyleSheet.create({
  fieldStyle: {
    paddingHorizontal: 20,
    marginTop: 8,
    borderRadius: 8,
    height: 40,
    borderColor: '#fdc9db',
    borderWidth: 1.6,
  },
  IconStyle: {
    position: 'absolute',
    right: 10,
    paddingTop: 8,
  },
  eyeStyle: {
    position: 'absolute',
    right: 30,
    paddingTop: 8,
    paddingHorizontal: 5,
  },
});
