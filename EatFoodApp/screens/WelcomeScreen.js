import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import { registerRootComponent } from 'expo';
import { CityPicker } from '../components/CityPicker';

export default class WelcomeScreen extends React.Component{
    constructor(props){
        super(props);
     
        this.state = {
           count: 0,
        }
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    

    render(){
        const {navigate} = this.props.navigation;

        var styles = StyleSheet.create({
            container: {
                flex: 1,
                padding: 50,
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#8f0c63'
            },
            button: {
                width: 300,
                marginBottom: 15,
                padding: 15,
                borderRadius: 5,
            },
            logo: {
                color: '#ffffff',
                fontSize: 40,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                alignSelf: 'center'
            },
            text: {
                color: '#ffffff',
                fontSize: 20,
                alignSelf: 'center',
                marginTop: 30
            }

        });

        return (
            <View style={styles.container}>
                <Text style={styles.logo}>EAT FOOD</Text>
                <Text style={styles.text}>Select your city: </Text>
                <CityPicker></CityPicker>
                <Button id="seeRestsButton" 
                    color="#b983a7"
                    style={styles.button} 
                    onPress={() => navigate('ListOfRestaurants')} 
                    title={"Go!"}/>
            </View>
        ); 
    }
}