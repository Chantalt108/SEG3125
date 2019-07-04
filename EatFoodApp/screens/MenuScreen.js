import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { MenuItem } from '../components/MenuItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
export class MenuScreen extends React.Component{

    state = {
        cart:[],
        total: 0,
        totalITems: 0
    };

    static navigationOptions = ({navigation}) => {
        return {
            headerTitleStyle :{color:'#fff'},
            headerStyle: {backgroundColor:"#b983a7"}
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
        let currNumItems = this.state.totalITems;
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
        currNumItems ++;
        this.setState({totalITems: currNumItems});
        this.setState({total: currTotal});       
    }

    removeItem(item, price){
        let currTotal = this.state.total;
        let currCart = this.state.cart;
        let currNumItems = this.state.totalITems;
        let inCartIndex = currCart.findIndex(cartItem => cartItem.itemName === item);

        if(inCartIndex > -1){
            currCart[inCartIndex].itemQuantity --;

            if(currCart[inCartIndex].itemQuantity === 0){
                currCart.splice(inCartIndex, 1);
            }

            currTotal = currTotal - price;
            currNumItems --;
            this.setState({totalITems: currNumItems});
            this.setState({total: currTotal});
        }        
    }

    getQuantity(item){
        var cart = this.state.cart;
        var quantity;
        let inCartIndex = cart.findIndex(cartItem => cartItem.itemName === item);

        if(inCartIndex > -1){
            quantity = cart[inCartIndex].itemQuantity; 
        } else {
            quantity = 0;
        }

        return quantity;
    }
    
    getMenuItems(id){
        var currItems;

        menuItems.map((rest)=> {
            if(id === rest.id){
                currItems = rest.items.map((item) => {
                    let i = rest.items.indexOf(item);
                    return <View style={styles.menuContainer}>
                            <MenuItem id={rest.id} name={item} price={rest.prices[i]}/>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity style={styles.quantityButton} onPress={()=>this.addItem(item, rest.prices[i])}>
                                    <Text style={styles.quantityText}>+</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityNum}>{this.getQuantity(item)}</Text>
                                <TouchableOpacity style={styles.quantityButton} onPress={()=>this.removeItem(item, rest.prices[i])}>
                                    <Text style={styles.quantityText}>-</Text>
                                </TouchableOpacity>
                            </View>
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
            <View style={{flex:1}}>
                <View style={styles.container}>
                    <Text style={{fontWeight:'bold', fontSize: 20}}>{this.getRestName(id)}</Text>
                    <View style={{flex: 1}}>{this.getMenuItems(id)}</View>
                </View>
                <View>
                    <TouchableOpacity style={styles.cartSummary}
                        onPress={() => navigation.navigate("Cart", {cart: this.state.cart, total: this.state.total})}>
                        <Text style={styles.cartItem}>CART</Text>
                        <Text style={styles.cartItem}>Items: {this.state.totalITems}</Text>
                        <Text style={styles.cartItem}>Subtotal: ${this.state.total.toFixed(2)}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    },
    menuContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#8f0c63', 
        borderWidth: 2,
        borderRadius: 5,
        paddingRight: 10
    },
    quantityContainer: {
        flexDirection: 'row',
        width: 150, 
        justifyContent: 'space-evenly'
    },
    quantityButton: {
        backgroundColor: "#b983a7",
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center'
    },
    quantityText: {
        color: 'white',
        alignSelf: 'center'
    }, 
    quantityNum: {
        fontSize: 20
    },
    cartSummary: {
        flexDirection: 'row',
        height: 75,
        backgroundColor: '#8f0c63',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    cartItem: {
        color: 'white', 
        fontWeight: 'bold',
        fontSize: 20
    }
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