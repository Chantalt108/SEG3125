
import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';

export class CityPicker extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           labelName: 0
        }
    }

    cities = [
        {
            label: "Ottawa", 
            value: "ott" 
        },
        {
            label: "Toronto", 
            value: "tor" 
        },
        {
            label: "Kingston",
            value: "kin"
        },
        {
            label: "Montreal",
            value: "mon"
        }
    ];

    getCity(value, label) {
        let index = 0;

        this.setState(
            {
              sel: value,
              labelName: label
            },
            () => {
              index = parseInt(this.state.labelName);
            }
        )
    }

    render(){
        const cityItems = this.cities.map((city) => 
            <Picker.Item label={city.label} value={city.value} />
        )
        return (<View><Picker id="citypicker"
            mode="dropdown"
            style={styles.citySelect}
            selectedValue={this.state.sel}
            onValueChange={(value, index) => this.getCity(value, index)}>
                {cityItems}    
            </Picker>
            <Text style={styles.text}>{"Find restaurants in " + this.cities[this.state.labelName].label + ":"}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    citySelect: {
        width: 300,
        height: 50,
        alignSelf: 'center',
        margin: 10,
        backgroundColor: '#ffffff',
        color: '#8f0c63',
    },
    text: {
        alignSelf: 'center',
        fontSize: 20, 
        marginTop: 30,
        marginBottom: 10,
        color: '#ffffff'
    }
});