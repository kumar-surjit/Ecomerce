import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Login, Signup} from '../Screens';
import navigationStrings from '../constants/navigationStrings';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen
          name={navigationStrings.Signup}
          component={Signup}
          options={{
            tabBarLabel: 'Signup',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="text-subject"
                size={20}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.Login}
          component={Login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-lock"
                size={20}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
