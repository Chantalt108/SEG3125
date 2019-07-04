import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import { Icon } from 'react-native-elements';

export class ConfirmationScreen extends React.Component{
    render(){
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.confCont}>
                <Text style={styles.text}>Your order is confirmed!</Text>
                <Icon name="check-circle" type="material" color="white" size={25}/>
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    confCont: {
        flex: 1,
        padding: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#8f0c63'
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 10
    }
});