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
import {deleteProduct} from '../src/actions/products';

import {connect} from 'react-redux';
import {NavigationEvents, withNavigation} from 'react-navigation';
import {Button} from 'react-native-elements';

import Card from '../components/card/Card';
import axios from 'axios';

export class DeleteProduct extends Component {
  // static navigationOptions = {
  //   title: 'Details',
  // };

  state = {
    products: [],
  };

  async componentDidMount() {
    const id = this.props.navigation.getParam('id');

    await this.props.dispatch(deleteProduct(id));
    // this.setState({
    //   products: this.props.products.productList.data.data,
    // });
  }

  render() {
    const item = this.state.products;
    return (
      <React.Fragment>
        <Text>product berhasil dihapus</Text>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },
  text: {
    paddingBottom: 5,
    fontSize: 16,
  },
  button: {
    height: 35,
    width: 70,
    padding: 5,
    backgroundColor: 'yellow',
    alignItems: 'center',
    borderRadius: 5,
  },
});

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};
export default withNavigation(connect(mapStateToProps)(DeleteProduct));
