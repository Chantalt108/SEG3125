import React from 'react';
import { StyleSheet, Text, View, Button, Picker, TextInput, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withTheme } from 'react-native-elements';

export class CartScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitleStyle :{color:'#fff'},
            headerStyle: {backgroundColor:"#b983a7"},
        };
    };

    displayCart(cart){
        let cartItems;

        cartItems = cart.map((item) => {
            console.log(item.itemName + " " + item.itemPrice + " " + item.itemQuantity);
            return (<View style={styles.cartItem}>
                    <Text style={{fontWeight: 'bold'}}>{item.itemName}</Text>
                    <Text style={styles.indented}>Price: ${item.itemPrice.toFixed(2)}</Text>
                    <Text style={styles.indented}>Quantity: {item.itemQuantity}</Text>
                </View>);
        });
        
        return cartItems;
    }

    render(){
        const { navigation } = this.props;
        const cart = navigation.getParam('cart', 'NO-CART');
        const cartSummary = cart;
        const subtotal = navigation.getParam('total', 'NO-TOTAL');
        const tax = 0.13 * subtotal;
        const total = subtotal + tax;
        const totalSum = total;

        return <View style={styles.container}>
                    {cart === 'NO-CART'? <Text>No items to show yet!</Text> : 
                    <View>
                        <View>{this.displayCart(cart)}</View>
                        <Text style={{fontWeight: 'bold', alignSelf: 'flex-end',}}>Subtotal: ${subtotal.toFixed(2)}</Text>
                        <Text style={{fontWeight: 'bold', alignSelf: 'flex-end',}}>Tax: ${tax.toFixed(2)}</Text>
                        <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
                        <TouchableOpacity style={styles.checkout} onPress={() => navigation.navigate('Checkout', {summary: cartSummary, cTotal: totalSum})}>
                            <Text style={{color: 'white', alignSelf: 'center'}}>Proceed To Checkout</Text>
                        </TouchableOpacity>
                    </View>
                    }
                </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
    indented: {
        marginLeft: 20
    },
    cartItem:{
        margin: 10
    }, 
    total: {
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#8f0c63'
    },
    checkout: {
        marginTop: 30,
        backgroundColor: '#b983a7',
        padding: 10,
        borderRadius: 5,
    }
});