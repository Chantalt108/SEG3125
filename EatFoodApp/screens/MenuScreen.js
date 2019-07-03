import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { MenuItem } from '../components/MenuItem';

export class MenuScreen extends React.Component{

    state = {
        cart:[],
        total: 0
    };

    static navigationOptions = ({navigation}) => {
        return {
            headerTitleStyle :{color:'#fff'},
            headerStyle: {backgroundColor:"#b983a7"},
            headerRight: <Button color='#8f0c63' title='Cart' size={25} onPress={() => navigation.navigate('Cart')} />
        };
    };

    getRestName(id){
        var name;
        
        switch(id){
            case 'rest1':
                name = "Indian Restaurant";
                break;
            case 'rest2':
                name = "Chinese Restaurant";
                break;
            case 'rest3':
                name = "Burger Restaurant";
                break;
            case 'rest4':
                name = "The Restaurant That Only Sells Pizza";
                break;
        }

        return name;
    }

    addItem(item, price){
        let currTotal = this.state.total;
        let currCart = this.state.cart;
        let inCartIndex = currCart.findIndex(cartItem => cartItem.itemName === item);

        if(inCartIndex > -1){
            currCart[inCartIndex].itemQuantity ++;
        } else{
            let newCartItem = {
                itemName: item,
                itemPrice: price,
                itemQuantity: 1
            }
            currCart.push(newCartItem);
            this.setState({cart: currCart});
        }

        currTotal = currTotal + price;

        this.setState({total: currTotal});       
    }

    removeItem(item, price){
        let currTotal = this.state.total;
        let currCart = this.state.cart;
        let inCartIndex = currCart.findIndex(cartItem => cartItem.itemName === item);

        if(inCartIndex > -1){
            currCart[inCartIndex].itemQuantity --;

            if(currCart[inCartIndex].itemQuantity === 0){
                currCart.splice(inCartIndex, 1);
            }

            currTotal = currTotal - price;
            this.setState({total: currTotal});
        }        
    }

    getQuantity(item){
        var cart = this.state.cart;
        var quantity;

        cart.map((cartItem) => {
            if(cartItem.itemName === item){
                quantity = cartItem.itemQuantity;
            } else {
                quantity = 0;
            }
        });

        return quantity;
    }
    
    getMenuItems(id){
        var currItems;

        menuItems.map((rest)=> {
            if(id === rest.id){
                currItems = rest.items.map((item) => {
                    let i = rest.items.indexOf(item);
                    return <View>
                            <MenuItem id={rest.id} name={item} price={rest.prices[i]}/>
                            <Button title='+' size={25} onPress={()=>this.addItem(item, rest.prices[i])}/>
                            <Text>{this.state.cart.length === 0 ? '0' : this.getQuantity(item)}</Text>
                            <Button title='-' size={25} onPress={()=>this.removeItem(item, rest.prices[i])}/>
                        </View>; 
                });
            }
        })

        return currItems;
    }
    
    render(){
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'NO-ID');

        return (
            <View style={styles.container}>
                <Text>Menu for {this.getRestName(id)} here</Text>
                <View>{this.getMenuItems(id)}</View>
                <Button title='Continue to Cart' 
                    onPress={() => navigation.navigate("Cart", {cart: this.state.cart, total: this.state.total})}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
});


const menuItems = [
    {
        id: "rest1",
        items: ["Indian food 1", "Indian food 2"],
        prices: [5.5, 4.0]
    },
    {
        id: "rest2",
        items: ["Chinese food 1", "Chinese food 2"],
        prices: [6.5, 2.0]
    },
    {
        id: "rest3",
        items: ["Burger 1", "Burger 2"],
        prices: [10.0, 4.5]
    },
    {
        id: "rest4",
        items: ["Pizza 1", "Pizza 2"],
        prices: [5.5, 4.0]
    }
];