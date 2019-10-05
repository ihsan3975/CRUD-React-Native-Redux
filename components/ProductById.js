import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  AsyncStorage,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getProductById, deleteProduct} from '../src/actions/products';

import {connect} from 'react-redux';
import {NavigationEvents, withNavigation} from 'react-navigation';
import {Button} from 'react-native-elements';

import Card from '../components/card/Card';
import axios from 'axios';

export class ProductById extends Component {
  // static navigationOptions = {
  //   title: 'Details',
  // };

  state = {
    products: [],
  };

  async componentDidMount() {
    console.log('masuk gan');
    const id = this.props.navigation.getParam('id');

    await this.props.dispatch(getProductById(id));
    this.setState({
      products: this.props.products.productList.data.data,
    });
  }

  handlerSubmit = async () => {
    const id = this.props.navigation.getParam('id');
    // window.event.preventDefault();
    console.log('woi ini dia');
    console.log(this.state);
    await this.props.dispatch(deleteProduct(id));
    alert('this product has been deleteds');
    this.props.navigation.navigate('ListProduct');
    // this.props.history.push('/products');
    console.log('habis props dong');
  };

  // async deleteProduct() {
  //   const id = this.props.navigation.getParam('id');
  //   await axios.delete(`/products/users/${id}`);
  // }

  render() {
    const item = this.state.products;
    return (
      <React.Fragment>
        <View>
          <FlatList
            // style={styles.container}
            data={this.state.products}
            keyExtractor={({id}, index) => id.toString()}
            renderItem={({item}) => (
              <ScrollView>
                <View>
                  <NavigationEvents onDidFocus={() => getProductById()} />
                  <View style={{alignItems: 'center'}}>
                    <Image
                      source={{uri: item.image}}
                      style={{width: 250, height: 250}}
                      resizeMode="contain"
                    />
                  </View>
                  <View>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <Text
                          style={{
                            marginLeft: 15,
                            marginTop: 15,
                            fontSize: 20,
                            fontWeight: 'bold',
                          }}>
                          {item.name}
                        </Text>
                        <View
                          style={{position: 'absolute', right: 13, margin: 10}}>
                          <Text>Stock: {item.quantity}</Text>
                        </View>
                      </View>
                      <View
                        style={{
                          marginLeft: 15,
                          marginBottom: 25,
                          width: 40,
                          height: 20,
                          backgroundColor: '#FFE66D',
                          borderRadius: 70,
                          alignItems: 'center',
                          padding: 2,
                        }}>
                        <Text>{item.id_category}</Text>
                      </View>
                      <View style={{marginLeft: 15, marginRight: 15}}>
                        <Text style={{marginBottom: 7}}>Description: </Text>
                        <View
                          style={{
                            borderColor: 'grey',
                            borderRadius: 15,
                            borderStyle: 'dashed',
                            backgroundColor: '#f2f2f2',
                            borderWidth: 1,
                            padding: 3,
                          }}>
                          <Text>{item.description}</Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 100,
                      }}>
                      <TouchableOpacity
                        style={{
                          height: 35,
                          width: 70,
                          margin: 10,
                          padding: 10,
                          backgroundColor: '#4ECDC4',
                          alignItems: 'center',
                          borderRadius: 9,
                        }}
                        onPress={() =>
                          this.props.navigation.navigate('EditProduct', {
                            id: item.id,
                          })
                        }>
                        <Text>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          height: 35,
                          width: 70,
                          margin: 10,
                          padding: 10,
                          backgroundColor: '#FF6B6B',
                          alignItems: 'center',
                          borderRadius: 9,
                        }}
                        onPress={() => this.handlerSubmit()}>
                        <Text>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
            )}
          />
        </View>
      </React.Fragment>
    );
  }
}
// const styles = StyleSheet.create({
//   // MainContainer: {
//   //   flex: 1,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   backgroundColor: '#f5fcff',
//   //   padding: 11,
//   // },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#43A047',
//     padding: 12,
//     width: 280,
//     marginTop: 12,
//   },
//   text: {
//     paddingBottom: 5,
//     fontSize: 16,
//   },
//   button: {
//     height: 35,
//     width: 70,
//     padding: 5,
//     backgroundColor: 'yellow',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
// });

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};
export default withNavigation(connect(mapStateToProps)(ProductById));
