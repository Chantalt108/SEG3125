import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  TextInput,
  TouchableHighlight,
  Alert,
  ReactDOM,
  document
} from 'react-native';
import { registerRootComponent } from 'expo';

export class CheckoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PayOptCash:true,
    };
  }
  onPickerValueChange = (value, index) => {
    this.setState(
      {
        payOpt: value,
      },
      () => {
        // here is our callback that will be fired after state change.
        if (value == 'cash') {
          return (
            <View style={styles.container}>
              <Text style={styles.text}>Caash will be paid upon delivery</Text>
            </View>
          );
        } else if (value == 'debit') {
          return (
            <View style={styles.container}>
              <Text style={styles.text}>Card Number</Text>
            </View>
          );
        } else if (value == 'credit') {
          return (
            <View style={styles.container}>
              <Text style={styles.text}>Card Number</Text>
            </View>
          );
        }
      }
    );
  };
  render() {
    const { navigate } = this.props.navigation;

    const styles = StyleSheet.create({
      container: {
        padding: 30,
      },
    });

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Checkout</Text>
        <Text style={styles.text}>Chinese Food or Indian Food </Text>
        <Text style={styles.text}>Total: </Text>
        <Picker
          id="PaymentMethod"
          selectedValue={this.state.payOpt}
          onValueChange={this.onPickerValueChange}>
          <Picker.Item label="Cash" value="cash" />
          <Picker.Item label="Debit" value="debit" />
          <Picker.Item label="Credit" value="credit" />
        </Picker>
        <View style={styles.container}>
          <Text>If paying by cash, payment will be done upon delivery.</Text>
          <Text>Otherwise, fill out payment details below if paying by debit or credit</Text>
          <View>
            <Text>Card Number: </Text><TextInput placeholder="Card number" id="CardNumber"></TextInput>
            <Text>Expiration Date: </Text><TextInput placeholder="Expiration Date" id="ExpDate"></TextInput>
            <Text>CVV: </Text><TextInput placeholder="CVV" id="Cvv"></TextInput>
            <Text>Country: </Text><TextInput placeholder="Country" id="Country"></TextInput>
            <Text>Zip Code: </Text><TextInput placeholder="Countzip codery" id="Zip"></TextInput>
          </View>
        </View>
      </View>
    );
  }
}
export default CheckoutScreen;


const styles = StyleSheet.create({});

