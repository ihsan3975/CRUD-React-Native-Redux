import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Picker,
  input,
  // FlatList,
} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import {addProduct} from '../src/actions/products';
// import {getCategories} from '../src/actions/categories';
import {withNavigation} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
    if (
      !this.state.name ||
      !this.state.image ||
      !this.state.description ||
      !this.state.id_category ||
      !this.state.quantity
    ) {
      alert('All Fields Are Required');
    } else {
      await this.props.dispatch(addProduct(this.state));
      alert('New Product Added!');
      this.props.navigation.navigate('ListProduct');
      // console.log('habis props dong');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={{alignItems: 'center'}}>
            {/* <Text style={{fontSize: 35, paddingBottom: 10}}>
              Add New Product
            </Text> */}
            <Image
              source={require('../src/public/img/addProd.png')}
              style={{
                width: 150,
                height: 150,
                borderRadius: 30,
                marginTop: 10,
              }}
            />
          </View>
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
            placeholder="Image"
            name="image"
            onChangeText={image => this.setState({image})}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Description"
            name="description"
            onChangeText={description => this.setState({description})}
          />

          {/* <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Image"
            name="image"
            onChangeText={image => this.setState({image})}
          /> */}

          <Picker
            mode="dropdown"
            style={styles.input}
            placeholder="ID Category"
            name="id_category"
            selectedValue={this.state.id_category}
            onValueChange={id_category => this.setState({id_category})}>
            <Picker.Item label="---Category---" value="" />
            <Picker.Item label="Bed" value="1" />
            <Picker.Item label="Sofa" value="2" />
            <Picker.Item label="Chest" value="3" />
          </Picker>

          {/* <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="ID Category"
            name="id_category"
            onChangeText={id_category => this.setState({id_category})}
          /> */}

          {/* <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="ID Category"
            name="id_category"
            // value={`${this.state.id_category}`}
            onChangeText={id_category => this.setState({id_category})}
          /> */}

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
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
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

export default withNavigation(connect(mapStateToProps)(AddProduct));
