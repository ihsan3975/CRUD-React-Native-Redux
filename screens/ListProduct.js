import React, {Component, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  AsyncStorage,
  Picker
} from 'react-native';
import {debounce} from 'lodash'
import {SearchBar} from 'react-native-elements'
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
    search: '' ,
    sortBy: '',
    sort: ''
  };

  // delayedSearch = debounce(this.onChangeText, 1000)

  updateSearch = (search) => {
    this.setState({search: search})
    // this.debounce(this.onChangeText, 5000)
    this.getProd()
  }
  
  updateSort = (sort) => {
    this.setState({sort: sort})
    // this.debounce(this.onChangeText, 5000)
    this.getProd()
  }
  
  updateSortBy = (sortBy) => {
    this.setState({sortBy: sortBy})
    // this.debounce(this.onChangeText, 5000)
    this.getProd()
  }

  getProd() {
    axios.get(`http://192.168.43.83:4000/products?key=${this.state.search}&sort=${this.state.sort}&sortBy=${this.state.sortBy}`).then(response =>
      this.setState({
        products: response.data.data,
      }),
    );
  }

  render() {
    return (
      <React.Fragment>
        <NavigationEvents
          onDidFocus={() => {
            this.getProd();
          }}
        />
        <View style={{flex: 1, backgroundColor: '#fff'}}>
        <SearchBar
          placeholder="Type Here..."
          name="search"
          onChangeText={this.updateSearch}
          value={this.state.search}
      />
      <View style={{flexDirection: 'row'}}>
        <Picker
          selectedValue={this.state.sort}
          value={this.state.sort}
          style={{height: 50, flex: 1}}
          onValueChange={this.updateSort}>
          <Picker.Item label="Ascending" value='asc' />
          <Picker.Item label="Descending" value='desc' />
        </Picker>
        
        <Picker
          selectedValue={this.state.sortBy}
          value={this.state.sortBy}
          style={{height: 50, flex: 1}}
          onValueChange={this.updateSortBy}>
          <Picker.Item label="Id" value='id' />
          <Picker.Item label="Name" value='name' />
          <Picker.Item label="Quantity" value='quantity' />
        </Picker>
      </View>
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
