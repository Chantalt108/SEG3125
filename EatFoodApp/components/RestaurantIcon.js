import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Picker, Image, TouchableHighlight } from 'react-native';

export class RestaurantIcon extends React.Component {

    getImage = () => {
        var imgSrc;
        
        switch(this.props.id){
            case 'rest1':
                imgSrc = <Image style={styles.image} source={require('./1200px-Fast_Food_Restaurant_in_Malinska_im_Hafen.jpg')}/>;
                break;
            case 'rest2':
                imgSrc = <Image style={styles.image} source={require('./1200px-Fast_Food_Restaurant_in_Malinska_im_Hafen.jpg')}/>;
                break;
            case 'rest3':
                imgSrc = <Image style={styles.image} source={require('./180405-fast-food-chains-in-n-out.jpg')}/>;
                break;
            case 'rest4':
                imgSrc = <Image style={styles.image} source={require('./pizzarest.jpg')}/>;
                break;
        }
        return imgSrc;
    }

    render(){
        
        return(
            <View style={styles.iconContainer}>
                {this.getImage()}
                <View style={styles.restInfo}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: '#8f0c63'}}>{this.props.name}</Text>
                    <Text>{this.props.rating}</Text>
                    <Text>{this.props.address}</Text>
                    <Text>{this.props.priceRange}</Text>
                    <Text>{this.props.hours}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 130,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    }, 
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#8f0c63', 
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 7,
        height: 130
    },
    restInfo: {
        flex: 1,
        marginLeft: 5
    }
});

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