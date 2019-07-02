import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import WelcomeScreen from  './screens/WelcomeScreen';
import MenuScreen from  './screens/MenuScreen';
import { ListOfRestaurantsScreen } from './screens/ListOfRestaurantsScreen';


const AppNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerTitle: 'Welcome'
    }
  },
  ListOfRestaurants: {
    screen: ListOfRestaurantsScreen,
    navigationOptions: {
      headerTitle: 'List of Restaurants'
    }
  },
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      headerTitle: 'Menu'
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default createAppContainer(AppNavigator)