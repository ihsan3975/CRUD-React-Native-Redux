import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  AsyncStorage,
} from 'react-native';
import {getProducts} from '../src/actions/products';

import {connect} from 'react-redux';

import Card from '../components/card/Card';
import {NavigationEvents} from 'react-navigation';
import axios from 'axios';

export class ListProduct extends Component {
  // static navigationOptions = {
  //   title: null,
  //   headerMode: 'screen',
  // };

  state = {
    products: [],
  };

  componentDidMount() {
    this.getProd();
    // // const { sort, sortBy, limit, page, key } = this.state;
    // axios.get(`http://192.168.1.18:4000/products`).then(response =>
    //   this.setState({
    //     products: response.data.data,
    //   }),
    // );
    // console.log(this.state);
  }

  getProd() {
    // () => {
    // const { sort, sortBy, limit, page, key } = this.state;
    axios.get(`http://192.168.1.104:4000/products`).then(response =>
      this.setState({
        products: response.data.data,
      }),
    );
    // console.log(this.state);
    // };
  }

  // async componentDidMount() {
  //   await this.props.dispatch(getProducts());
  //   this.setState({
  //     products: this.props.products.productList.data.data,
  //   });
  // }

  render() {
    // const item = this.state.products;
    return (
      <React.Fragment>
        <NavigationEvents
          onDidFocus={() => {
            this.getProd();
          }}
        />
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <FlatList
            style={styles.container}
            data={this.state.products}
            renderItem={({item}) => <Card item={item} />}
            keyExtractor={({id}, index) => id.toString()}
          />
        </View>
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
    color: '#fff',
  },
});

// const mapStateToProps = state => {
//   return {
//     products: state.products,
//   };
// };
// export default connect(mapStateToProps)(ListProduct);
export default ListProduct;
