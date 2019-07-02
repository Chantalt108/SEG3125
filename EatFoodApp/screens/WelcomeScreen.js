import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import { registerRootComponent } from 'expo';

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
                display: 'flex',
                flex: 1,
                margin: 50,
                flexDirection: 'column'
            },
            button: {
                width: 300,
                backgroundColor: '#8f0c63',
                marginBottom: 15,
                padding: 15,
                borderRadius: 5
            },
            logo: {
                color: '#8f0c63',
                fontSize: 40,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                alignSelf: 'center'
            },
            citySelect: {
                width: 300,
                height: 50,
                alignSelf: 'center',
                borderColor: '#8f0c63'
            }
        });

        return (
            <View style={styles.container}>
                <Text style={styles.logo}>EAT FOOD</Text>
                <Picker
                    selectedValue={this.state.language}
                    style={styles.citySelect}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="City" value="city" />
                    <Picker.Item label="Ottawa" value="ottawa" />
                    <Picker.Item label="Toronto" value="toronto" />
                    <Picker.Item label="Kingston" value="kingston" />
                    <Picker.Item label="Montreal" value="montreal" />
                </Picker>
                <Button style={styles.button} onPress={() => navigate('ListOfRestaurants')} title="List Of Restaurants" />
            </View>
        ); 
    }
}