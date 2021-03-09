import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTab from './HomeTab';
import {ProductDetails, Cart, OrderConfirm} from '../Screens';
import Routes from './Routes';
import navigationStrings from '../constants/navigationStrings';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name={navigationStrings.Auth}
          component={Routes}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name={navigationStrings.HomeTab}
          component={HomeTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.ProductDetails}
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.Cart}
          component={Cart}
          options={{
            headerShown: true,
            title: 'SHOPPING BAG',
            headerTitleStyle: {left: -18, fontSize: 17},
          }}
        />
        <Stack.Screen
          name={navigationStrings.OrderConfirm}
          component={OrderConfirm}
          options={{
            headerShown: true,
            title: 'Order Placed',
            headerTitleStyle: {left: -18, fontSize: 17},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
