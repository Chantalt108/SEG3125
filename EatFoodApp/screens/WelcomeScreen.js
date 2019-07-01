import React from 'react';
import { Text, View, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => (
    <View>
        <Text>Hello from the home screen!</Text>
        <Button onPress={() => navigation.navigate('Menu')} title="Menu" />
    </View>
);

export default WelcomeScreen