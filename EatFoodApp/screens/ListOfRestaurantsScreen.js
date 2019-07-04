import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Picker, TextInput, TouchableHighlight } from 'react-native';
import { RestaurantIcon } from '../components/RestaurantIcon';
import { SearchBar, Icon } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


export class ListOfRestaurantsScreen extends React.Component {
    constructor(props){
        super(props);
    }

    state = {
        searchResults: [],
        text: '',
        noResults: false
    };

    static navigationOptions = ({navigation}) => {
        return {

            headerTitleStyle :{color:'#fff'},
            headerStyle: {backgroundColor:"#b983a7"},
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

        if(results.length === 0){
            this.setState({noResults: true})
        }

        console.log(this.state.noResults);
        this.setState({searchResults: results});
    }

    displayResults(){
        let results = this.state.searchResults;
        const {navigate} = this.props.navigation;

        let displayedRes = results.map((result) => {
            return(<TouchableOpacity onPress={() => navigate("Menu", {id: result.id})}>
                <RestaurantIcon 
                    id={result.id}
                    name={result.name}
                    rating={result.rating}
                    address={result.address}
                    priceRange={result.priceRange}
                    hours={result.hours}
                ></RestaurantIcon>
            </TouchableOpacity>);
        });

        return displayedRes;
    }

    buttons(){
        const foodTypes = ["Indian", "Lunch", "Dinner", "Late Night", "Chinese", 
            "Burgers", "Dessert", "Italian"];
        
        let typeButtons = foodTypes.map((type) => {
            return <TouchableOpacity
                style={styles.button} 
                onPress={() => {this.performSearch(type)}}>
                    <Text style={{color: "#fff", alignSelf: 'center', fontSize: 15, fontWeight: 'bold'}}>{type}</Text>
                </TouchableOpacity>
        })

        return typeButtons;
    }
    
    render() {
        const {navigate} = this.props.navigation;

        const allRests = restaurants.map((restaurant) => 
            <TouchableOpacity onPress={() => navigate("Menu", {id: restaurant.id})}>
                <RestaurantIcon 
                    id={restaurant.id}
                    name={restaurant.name}
                    rating={restaurant.rating}
                    address={restaurant.address}
                    priceRange={restaurant.priceRange}
                    hours={restaurant.hours}
                ></RestaurantIcon>
            </TouchableOpacity>
        );

        return (
            <ScrollView contentContainerStyle={styles.wrapper} style={styles.container}>
                <View style={styles.searchContain}>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        placeholder="Search or choose a button below"
                    />
                    <TouchableOpacity style={styles.searchButton} 
                        onPress={() => {this.performSearch(this.state.text)}}>
                            {/* <Text style={styles.searchButtonText}>Searc</Text> */}
                            <Icon name='search' type='material' color='white'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>{this.state.text.length === 0 ? this.buttons() : null}</View>
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
        type: ["italian", "lunch", "dinner", "late night"],
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
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    searchContain: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10
    },
    textInput: {
        flex: 1,
        height: 40, 
        borderColor: '#8f0c63', 
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        fontSize: 20
    },
    searchButton: {
        flex: 1,
        backgroundColor: '#8f0c63',
        borderRadius: 5,
        justifyContent: 'center',
        padding: 5,
        width: 60,
        marginLeft: 5
    },
    searchButtonText:{
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        backgroundColor: "#b983a7",
        flex: 1,
        width: 80,
        height: 40,
        margin: 3,
        padding: 7,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
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