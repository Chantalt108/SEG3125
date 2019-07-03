import React from 'react';
import { StyleSheet, Text, View, Button, Picker, TextInput, TouchableHighlight } from 'react-native';

export class CartScreen extends React.Component {
    render(){

        return <Text>NumItems: {this.props.num}</Text>
    }
}