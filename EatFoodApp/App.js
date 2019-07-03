import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import WelcomeScreen from  './screens/WelcomeScreen';
import { MenuScreen } from  './screens/MenuScreen';
import { ListOfRestaurantsScreen } from './screens/ListOfRestaurantsScreen';
import {CartScreen} from './screens/CartScreen';


const AppNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerTitle: 'Welcome',
    }
  },
  ListOfRestaurants: {
    screen: ListOfRestaurantsScreen,
    navigationOptions: {
      headerTitle: 'List of Restaurants',
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

  }
});

export default createAppContainer(AppNavigator)