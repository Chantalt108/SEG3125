import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { CartScreen } from '../screens/CartScreen';

export class MenuItem extends React.Component {

    getImage = () => {
        var imgSrc;
        switch(this.props.id){
            case 'rest1':
                switch(this.props.name){
                    case 'Indian food 1':
                        imgSrc = <Image style={styles.itemImage} source={require('./pizzarest.jpg')}/>;
                        break;
                    case 'Indian food 2':
                        imgSrc = <Image style={styles.itemImage} source={require('./180405-fast-food-chains-in-n-out.jpg')}/>;
                        break;
                }
                break;
            case 'rest2':
                imgSrc = <Image style={styles.itemImage} source={require('./pizzarest.jpg')}/>;
                break;
            case 'rest3':
                imgSrc = <Image style={styles.itemImage} source={require('./pizzarest.jpg')}/>;
                break;
            case 'rest4':
                imgSrc = <Image style={styles.itemImage} source={require('./pizzarest.jpg')}/>;
                break;
        }
        return imgSrc;
    }

    render(){
        return <View style={styles.menuItem}>
                    {this.getImage()}
                    <View style={styles.itemDescrip}>
                        <Text>{this.props.name}</Text>
                        <Text>${this.props.price.toFixed(2)}</Text>  
                    </View>
                </View>
    }
}

const styles = StyleSheet.create({
    menuItem: {
        flex: 1,
        flexDirection: 'row',
        height: 110,
        alignItems: 'center',
        paddingRight: 10
    },
    itemImage: {
        flex: 1,
        height: 110,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    itemDescrip: {
        flex: 1,
        marginLeft: 5
    }
});
