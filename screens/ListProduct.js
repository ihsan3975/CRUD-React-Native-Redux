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

export class ListProduct extends Component {
  static navigationOptions = {
    title: 'Products',
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    await this.props.dispatch(getProducts());
    this.setState({
      products: this.props.products.productList.data.data,
    });
  }

  render() {
    const item = this.state.products;
    return (
      <React.Fragment>
        <View style={{flex: 1}}>
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

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(ListProduct);
