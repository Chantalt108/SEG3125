import React from 'react';
import { StyleSheet, Text, View, Picker, TextInput} from 'react-native';
import { registerRootComponent } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class CheckoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentType: 'cash',
      cardNumber: null,
      expDate: null,
      cvv: null,
      country: null,
      postCode: null
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
        headerTitleStyle :{color:'#fff'},
        headerStyle: {backgroundColor:"#b983a7"},
    };
  };

  getCartSummary(cart){
    let cartItems = cart.map((item) => {
        return (<View style={styles.cartItem}>
                  <Text style={{fontWeight: 'bold'}}>{item.itemName}</Text>
                  <Text style={styles.indented}>Price: ${item.itemPrice.toFixed(2)}</Text>
                  <Text style={styles.indented}>Quantity: {item.itemQuantity}</Text>
              </View>);
    });
    return cartItems;
  }

  validateCardNum(){
    let num = this.state.cardNumber;
    var isnum = /^\d+$/.test(num);
    if(!isnum && num !== null){
      return <Text style={{color: 'red'}}>Card number can only contain digits</Text>
    }
  }

  validateExpDate(){
    let date = this.state.expDate;
    var isnum = /^\d+$/.test(date);
    if(!isnum && date !== null){
      return <Text style={{color: 'red'}}>Expiration date cannot contain letters</Text>
    }
  }

  validateCvv(){
    let cvv = this.state.cvv;
    var isnum = /^\d+$/.test(cvv);
    if(!isnum && cvv !== null){
      return <Text style={{color: 'red'}}>CVV can only contain digits</Text>
    }
  }

  validateCountry(){
    let country = this.state.country;
    var isLetter = /^[a-zA-Z]+$/.test(country);;
    if(!isLetter && country !== null){
      return <Text style={{color: 'red'}}>Country can only contain letters</Text>
    }
  }

  validatePostCode(){
    let pcode = this.state.postCode;
    var isAlphaNum = /^[a-z0-9]+$/.test(pcode);;
    if(!isAlphaNum && pcode !== null){
      return <Text style={{color: 'red'}}>Postal code can only contain letters and numbers</Text>
    }
  }

  displayCardFields(){
    return (<View> 
        <Text>Fill out payment details below: </Text>
        <TextInput placeholder="Card number (no spaces)" 
          value={this.state.cardNumber} 
          maxLength={16}
          onChangeText={(cardNumber) => this.setState({cardNumber})}>
        </TextInput>
        {this.validateCardNum()}
        <TextInput placeholder="Expiration Date (MMYY)" 
          value={this.state.expDate}
          maxLength={5}
          onChangeText={(expDate) => this.setState({expDate})}
        ></TextInput>
        {this.validateExpDate()}
        <TextInput placeholder="CVV" 
          value={this.state.cvv}
          maxLength={3}
          onChangeText={(cvv) => this.setState({cvv})}
          ></TextInput>
        {this.validateCvv()}
        <TextInput placeholder="Country" 
          value={this.state.country}
          onChangeText={(country) => this.setState({country})}
          ></TextInput>
        {this.validateCountry()}
        <TextInput placeholder="Postal code (no spaces)" 
          value={this.state.postCode}
          maxLength={6}
          onChangeText={(postCode) => this.setState({postCode})}
          ></TextInput>
          {this.validatePostCode()}
      </View>);
  }

  render() {
    const { navigation } = this.props;
    const cart = navigation.getParam('summary', 'NO-CART');
    const total = navigation.getParam('total', 'NO-TOTAL');

    const { navigate } = this.props.navigation;

    const styles = StyleSheet.create({
      container: {
        padding: 30,
      },
    });

    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#8f0c63'}}>Summary: </Text>
        <View>{this.getCartSummary(cart)}</View>
        <Text>Total: {total}</Text>
        <Picker
          id="PaymentMethod"
          selectedValue={this.state.payOpt}
          onValueChange={(value) => this.setState({paymentType: value})}
          style={{marginTop: 20}}>
          <Picker.Item label="Cash" value="cash" />
          <Picker.Item label="Debit" value="debit" />
          <Picker.Item label="Credit" value="credit" />
        </Picker>
        <View style={styles.container}>
          {this.state.paymentType === 'cash' ? <Text>If paying by cash, payment will be done upon delivery.</Text> : this.displayCardFields()}
        </View>
        <TouchableOpacity onPress={() => navigate('Confirmation')} style={{backgroundColor: "#b983a7", padding: 5 }}>
            <Text style={{color: 'white', alignSelf: 'center'}}>Confirm order</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 30, 
    borderColor: '#8f0c63', 
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 15
},
});

