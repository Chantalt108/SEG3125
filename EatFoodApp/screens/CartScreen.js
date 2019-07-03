import React from 'react';
import { StyleSheet, Text, View, Button, Picker, TextInput, TouchableHighlight } from 'react-native';

export class CartScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitleStyle :{color:'#fff'},
            headerStyle: {backgroundColor:"#b983a7"},
        };
    };

    displayCart(cart){
        console.log(cart);
        let cartItems = cart.map((item) => {
            console.log(item.itemName + " " + item.itemPrice + " " + item.itemQuantity);
            return (<View>
                    <Text>{item.itemName}</Text>
                    <Text style={styles.indented}>Price: {item.itemPrice}</Text>
                    <Text style={styles.indented}>Quantity: {item.itemQuantity}</Text>
                </View>);
        });
        return cartItems;
    }

    render(){
        const { navigation } = this.props;
        const cart = navigation.getParam('cart', 'NO-CART');
        const total = navigation.getParam('total', 'NO-TOTAL');

        return <View style={styles.container}>
                    <View>{this.displayCart(cart)}</View>
                    <Text>total: {total}</Text>
                </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    indented: {
        marginLeft: 20
    }
});