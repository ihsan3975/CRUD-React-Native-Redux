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
  TextInput,
} from 'react-native';
import {editCategories, getCategoryById} from '../src/actions/categories';

import {connect} from 'react-redux';
import {NavigationEvents, withNavigation} from 'react-navigation';
import {Button} from 'react-native-elements';

import Card from '../components/card/Card';
import axios from 'axios';

export class EditCategory extends Component {
  // static navigationOptions = {
  //   title: 'Details',
  // };

  state = {
    category: '',
    // date_added: '',
  };

  async componentDidMount() {
    const id = this.props.navigation.getParam('id');

    await this.props.dispatch(getCategoryById(id));
    this.setState({
      category: this.props.categories.categoryList.data.data[0].category,
    });
  }

  handlerSubmit = async () => {
    const id = this.props.navigation.getParam('id');
    console.log(id);
    console.log(this.state);
    await this.props.dispatch(editCategories(id, this.state));
    alert('Data Updated!');
    this.props.navigation.navigate('Categories');

    // console.log('cobaain');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Name Category"
          name="category"
          value={this.state.category}
          onChangeText={category => this.setState({category})}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.handlerSubmit()}>
          <Text style={styles.submitButtonText}> Edit Category </Text>
        </TouchableOpacity>
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
  //   });
});

const mapStateToProps = state => {
  return {
    categories: state.categories,
  };
};
export default withNavigation(connect(mapStateToProps)(EditCategory));
