import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import { RestaurantIcon } from '../components/RestaurantIcon';
import { SearchBar, Icon } from 'react-native-elements';

export class ListOfRestaurantsScreen extends React.Component {
    state = {
        search: '',
        searchResults: []
    };
    
    updateSearch = search => {
        this.setState({ search });
        this.performSearch(search);
    };

    performSearch(key) {
        console.log("searching for " + key);
        restaurants.map((restaurant) =>{
            if(restaurant.type.includes(key.toLowerCase())){
                console.log("found one!");
                this.state.searchResults.push(restaurant.name);
            }
        });

        this.state.searchResults.map((result) => console.log(result));
    }
    
    render() {
        const { search } = this.state;

        const results = <Text style={styles.text}>Results for {this.state.search}:</Text>
        const allRests = restaurants.map((restaurant) => { return (<Text>{restaurant.name}</Text>);})

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Search for restaurants or cuisines: </Text>
                <SearchBar
                    inputContainerStyle={styles.inputContainer}
                    containerStyle={styles.searchContainer}
                    placeholder="Type Here..."
                    searchIcon={{size: 24}}
                    onChangeText={this.updateSearch}
                    onSearchButtonPress={this.performSearch(search)}
                    value={search}
                />
                <Button
                    color="#b983a7"
                    style={styles.button} 
                    onPress={this.performSearch("Indian")} 
                    title={"Indian"}/>
                {this.state.search.length > 0 ? results :  allRests}
                <Text>{this.state.searchResults[0]}</Text>
            </View>
        );
    }
}

const restaurants = [
    {   
        id: "rest1",
        name: "Indian restaurant",
        rating: "4 stars",
        address: "1234 Street",
        type: ["indian", "lunch", "dinner", "late night"],
        priceRange: "$10-$15",
        hours: "24 hours",
        image: "1200px-Fast_Food_Restaurant_in_Malinska_im_Hafen.jpg"
    },
    {   
        id: "rest2",
        name: "Chinese restaurant",
        rating: "3 stars",
        address: "34th Street",
        type: ["chinese", "lunch", "dinner", "late night"],
        priceRange: "$5-$25",
        hours: "9am - 9pm",
        image: "1200px-Fast_Food_Restaurant_in_Malinska_im_Hafen.jpg"
    },
    {   
        id: "rest3",
        name: "Burger restaurant",
        rating: "5 stars",
        address: "Address Street",
        type: ["burgers", "lunch", "dinner", "late night", "dessert"],
        priceRange: "$10-$15",
        hours: "24 hours",
        image: "180405-fast-food-chains-in-n-out.jpg"
    },
    {
        id: "rest4",
        name: "The Restaurant that Only Sells Pizza",
        rating: "5 stars",
        address: "This Street",
        type: ["italian", "pizza", "lunch", "dinner", "late night", "vegan"],
        priceRange: "$15-$25",
        hours: "24 hours",
        image: "pizzarest.jpg"
    }
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 700
    },
    button: {
        width: 300,
        marginBottom: 15,
        padding: 15,
        borderRadius: 5,
    },
    logo: {
        color: '#8f0c63',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        alignSelf: 'center'
    },
    text: {
        color: '#8f0c63',
        fontSize: 20,
        alignSelf: 'center',
    },
    searchContainer: {
        backgroundColor: 'transparent', 
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent' 
    },
    inputContainer: {
        backgroundColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white'
    }
});