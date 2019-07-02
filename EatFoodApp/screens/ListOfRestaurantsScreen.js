import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import { RestaurantIcon } from '../components/RestaurantIcon';
import { SearchBar } from 'react-native-elements';

export class ListOfRestaurantsScreen extends React.Component {
    constructor(props){
        super(props);
     
        this.state = {
           count: 0,
        }
    }

    static navigationOptions = {
        title: 'ListOfRestaurantsScreen',
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
            logo: {
                color: '#8f0c63',
                fontSize: 40,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                alignSelf: 'center'
            },
        });

        function Restaurant(props){
            return <h1>Hello, {props.name}</h1>;
        }

        return(
            <View style = {styles.container}>
                <Text style={styles.logo}>EAT FOOD</Text>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
                <RestaurantIcon></RestaurantIcon>
            </View>
        );
    }
    
}