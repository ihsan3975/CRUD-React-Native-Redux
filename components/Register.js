import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  TextInput,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  Image,
  AsyncStorage,
} from 'react-native';
import {withNavigation} from 'react-navigation';

// import {AsyncStorage} from '@react-native-community/async-storage';

import {register} from '../src/actions/users';
import {connect} from 'react-redux';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export class Register extends Component {
  state = {
    full_name: '',
    email: '',
    password: '',
    // token: '',
  };

  handlerSubmit = async () => {
    // console.log('saya sebelum token');
    // console.log('disini woi');
    await this.props.dispatch(register(this.state));
    // this.setState({
    //   token: this.props.users.usersProfile,
    // });
    // console.log(this.props.users.token.data.token);
    // console.log('saya setelah token');
    alert('New Data Added!');
    this.props.navigation.navigate('Login');
    // if (!this.props.users.token.data.token === true) {
    //   alert('Wrong Email or Password');
    // } else {
    //   AsyncStorage.setItem('token', this.props.users.token.data.token);
    //   this.props.navigation.navigate('ListProduct');
    // }

    // AsyncStorage.getItem('token').then(res =>
    //   this.setState({
    //     token: res,
    //   }),
    // );
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Full Name"
          name="full_name"
          required
          onChangeText={full_name => this.setState({full_name})}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          name="email"
          required
          onChangeText={email => this.setState({email})}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          required
          secureTextEntry
          name="password"
          onChangeText={password => this.setState({password})}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.handlerSubmit()}>
          <Text style={styles.submitButtonText}> Register </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.submitButtonText}> Back </Text>
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
});

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default withNavigation(connect(mapStateToProps)(Register));
