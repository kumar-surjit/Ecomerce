import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home, Profile} from '../Screens/index';
import navigationStrings from '../constants/navigationStrings';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen
          name={navigationStrings.Home}
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="home-outline"
                size={25}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.Profile}
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-outline"
                size={25}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
