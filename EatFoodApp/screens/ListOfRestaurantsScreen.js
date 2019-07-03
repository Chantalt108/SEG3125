import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Picker, TextInput, TouchableHighlight } from 'react-native';
import { RestaurantIcon } from '../components/RestaurantIcon';
import { SearchBar, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export class ListOfRestaurantsScreen extends React.Component {
    constructor(props){
        super(props);
    }

    state = {
        searchResults: [],
        searchDone: false
    };

    static navigationOptions = ({navigation}) => {
        return {
            headerTitleStyle :{color:'#fff'},
            headerStyle: {backgroundColor:"#b983a7"},
            headerRight: <Button color='#8f0c63' title='Cart' size={25} onPress={() => navigation.navigate('Cart')} />
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({ handleSave: this._saveDetails });
    }

    
    updateSearch(value){
        console.log(value);
    };

    performSearch(searchValue) {
        searchValue = searchValue.toLowerCase();
        console.log("searching for " + searchValue);
        this.setState({searchResults: []});
        let results = [];

        restaurants.map((rest) => {
            if(rest.type.includes(searchValue)){
                console.log(rest.name + " has food for type " + searchValue);
                results.push(rest);
            }
        });

        console.log(results);
        this.setState({searchResults: results});
    }

    displayResults(){
        let results = this.state.searchResults;

        let displayedRes = results.map((result) => {
            return(<View>
                <RestaurantIcon 
                    id={result.id}
                    name={result.name}
                    rating={result.rating}
                    address={result.address}
                    priceRange={result.priceRange}
                    hours={result.hours}
                ></RestaurantIcon>
            </View>);
        });
        return displayedRes;
    }

    buttons(){
        const foodTypes = ["Indian", "Lunch", "Dinner", "Late Night", "Chinese", 
            "Burgers", "Dessert", "Italian", "Pizza", "Vegan" ];
        
        let typeButtons = foodTypes.map((type) => {
            return <Button
                color="#b983a7"
                style={styles.button} 
                onPress={() => {this.performSearch(type)}} 
                title={type}/>
        })

        return typeButtons;
    }
    
    render() {
        const {navigate} = this.props.navigation;
        
        const resultsTitle = <Text style={styles.text}>Results for {this.state.search}:</Text>

        const allRests = restaurants.map((restaurant) => 
            <TouchableHighlight onPress={() => navigate("Menu", {id: restaurant.id})}>
                <RestaurantIcon 
                    id={restaurant.id}
                    name={restaurant.name}
                    rating={restaurant.rating}
                    address={restaurant.address}
                    priceRange={restaurant.priceRange}
                    hours={restaurant.hours}
                ></RestaurantIcon>
            </TouchableHighlight>
        );

        return (
            <ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
                <Text style={styles.text}>Search for restaurants or cuisines: </Text>
                <View>{this.buttons()}</View>
                <View>{this.state.searchResults.length === 0 ? allRests: this.displayResults()}</View>
            </ScrollView>
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
        flexDirection: 'column'
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
    },
    tHigh: {
        backgroundColor: 'red'
    }
});