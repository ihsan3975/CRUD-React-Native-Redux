import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Text,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import {getProducts} from '../src/actions/products';

import {connect} from 'react-redux';

import Card from '../components/card/Card';
import {NavigationEvents, withNavigation} from 'react-navigation';
import axios from 'axios';

export class Categories extends Component {
  static navigationOptions = {
    title: 'Categories',
  };

  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
    // // const { sort, sortBy, limit, page, key } = this.state;
    // axios.get(`http://192.168.1.18:4000/products`).then(response =>
    //   this.setState({
    //     products: response.data.data,
    //   }),
    // );
    // console.log(this.state);
  }

  getCategories() {
    // () => {
    // const { sort, sortBy, limit, page, key } = this.state;
    axios.get(`http://192.168.1.18:4000/category`).then(response =>
      this.setState({
        categories: response.data.data,
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
    const item = this.state.categories;
    return (
      <React.Fragment>
        <NavigationEvents
          onDidFocus={() => {
            this.getCategories();
          }}
        />
        <View
          style={{flex: 1, backgroundColor: '#f1f2f6', position: 'relative'}}>
          <FlatList
            style={styles.container}
            data={this.state.categories}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 40,
                  backgroundColor: '#f0e0d0',
                  margin: 10,
                  alignItems: 'center',
                  paddingTop: 5,
                  borderRadius: 7,
                }}
                onPress={() =>
                  this.props.navigation.navigate('CategoryById', {
                    id: item.id,
                  })
                }>
                <Text style={{fontSize: 20}}>{item.category}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={({id}, index) => id.toString()}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              backgroundColor: '#ffa502',
              width: 40,
              height: 40,
              left: 300,
              top: 500,
              borderRadius: 100,
              alignItems: 'center',
              // paddingTop: 5,
            }}
            onPress={() => this.props.navigation.navigate('AddCategory')}>
            <Text style={{fontSize: 30}}>+</Text>
          </TouchableOpacity>
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
// export default connect(mapStateToProps)(Categories);
export default withNavigation(Categories);
