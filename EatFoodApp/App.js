import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import WelcomeScreen from  './screens/WelcomeScreen';
import { MenuScreen } from  './screens/MenuScreen';
import { ListOfRestaurantsScreen } from './screens/ListOfRestaurantsScreen';
import {CartScreen} from './screens/CartScreen';
import {CheckoutScreen} from './screens/CheckoutScreen';
import {ConfirmationScreen} from './screens/ConfirmationScreen';


const AppNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      header: null
    }
  },
  ListOfRestaurants: {
    screen: ListOfRestaurantsScreen,
    navigationOptions: {
      headerTitle: 'Restaurants',
    }
  },
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      headerTitle: 'Menu',
    }
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      headerTitle: 'Cart'
    }
  },
  Checkout: {
    screen: CheckoutScreen,
    navigationOptions: {
      headerTitle: 'Checkout'
    }
  },
  Confirmation: {
    screen: ConfirmationScreen,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      header: null
    }
  }
});

export default createAppContainer(AppNavigator)