import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';
import {addProduct} from '../src/actions/products';

class AddProduct extends Component {
  static navigationOptions = {
    title: 'Add Product',
  };

  state = {
    name: '',
    description: '',
    image: '',
    id_category: '',
    quantity: '',
  };

  handlerSubmit = async () => {
    // window.event.preventDefault();
    console.log('woi ini dia');
    console.log(this.state);
    await this.props.dispatch(addProduct(this.state));
    // this.props.history.push('/products');
    console.log('habis props dong');
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <KeyboardAvoidingView style={styles.form} behavior="padding"> */}
        {/* <ScrollView> */}
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Name Product"
          name="name"
          onChangeText={name => this.setState({name})}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Description"
          name="description"
          onChangeText={description => this.setState({description})}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Image"
          name="image"
          onChangeText={image => this.setState({image})}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="ID Category"
          name="id_category"
          onChangeText={id_category => this.setState({id_category})}
        />

        <TextInput
          style={styles.input}
          type="numeric"
          underlineColorAndroid="transparent"
          placeholder="Quantity"
          name="quantity"
          onChangeText={quantity => this.setState({quantity})}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.handlerSubmit()}>
          <Text style={styles.submitButtonText}> Add Product </Text>
        </TouchableOpacity>

        {/* </KeyboardAvoidingView> */}
        {/* </KeyboardAvoidingView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    marginBottom: 0,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#F5DEB3',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 4,
  },
  submitButtonText: {
    color: 'black',
  },
  form: {
    // flex: 1,
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(AddProduct);
