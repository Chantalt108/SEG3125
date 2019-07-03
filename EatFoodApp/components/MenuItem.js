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
                        imgSrc = <Image style={styles.image} source={require('./pizzarest.jpg')}/>;
                        break;
                    case 'Indian food 2':
                        imgSrc = <Image style={styles.image} source={require('./180405-fast-food-chains-in-n-out.jpg')}/>;
                        break;
                }
                break;
            case 'rest2':
                imgSrc = <Image style={styles.image} source={require('./pizzarest.jpg')}/>;
                break;
            case 'rest3':
                imgSrc = <Image style={styles.image} source={require('./pizzarest.jpg')}/>;
                break;
            case 'rest4':
                imgSrc = <Image style={styles.image} source={require('./pizzarest.jpg')}/>;
                break;
        }
        return imgSrc;
    }

    render(){
        return  <View styles={styles.container}>
                    <Text>{this.props.name}</Text>
                    <Text>{this.props.price}</Text>
                    <View>{this.getImage()}</View>
                </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        marginTop: 10,
        width: 50,
        height: 50
    }
});
