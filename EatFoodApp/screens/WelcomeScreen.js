import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import { registerRootComponent } from 'expo';
import { CityPicker } from '../components/CityPicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class WelcomeScreen extends React.Component{
    constructor(props){
        super(props);
     
        this.state = {
           count: 0,
        }
    }

    static navigationOptions = {
        headerVisible: false,
        header: null
    };


    render(){
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.logo}>EAT FOOD</Text>
                <Text style={styles.text}>Select your city: </Text>
                <CityPicker></CityPicker>
                <TouchableOpacity id="seeRestsButton" 
                    style={styles.button} 
                    onPress={() => navigate('ListOfRestaurants')}>
                        <Text style={styles.text}>Go!</Text>
                </TouchableOpacity>
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#8f0c63'
    },
    button: {
        backgroundColor: "#b983a7",
        width: 300,
        marginBottom: 15,
        padding: 15,
        borderRadius: 5,
    },
    logo: {
        color: '#ffffff',
        fontSize: 70,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        alignSelf: 'center',
        marginBottom: 30
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        alignSelf: 'center'
    }

});