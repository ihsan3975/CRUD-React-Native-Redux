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
// import {Form} from 'react-native-elements'

// import {AsyncStorage} from '@react-native-community/async-storage';

import {register} from '../src/actions/users';
import {connect} from 'react-redux';

export class Register extends Component {
  state = {
    full_name: '',
    email: '',
    password: '',
    // token: '',
  };

  handlerSubmit = async () => {
    if (!this.state.full_name || !this.state.email || !this.state.password) {
      alert('There are incomplete required fields. Please complete them');
    } else {
      await this.props.dispatch(register(this.state));
      alert('Sign Up Successful!');
      this.props.navigation.navigate('Login');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Text style={{fontWeight: 'bold', fontSize: 30, marginTop: 40}}>
            Sign Up
          </Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Full Name"
            name="full_name"
            onChangeText={full_name => this.setState({full_name})}
          />
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            name="email"
            onChangeText={email => this.setState({email})}
          />
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            secureTextEntry
            name="password"
            onChangeText={password => this.setState({password})}
          />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.handlerSubmit()}>
          <Text style={styles.submitButtonText}> SIGN UP </Text>
        </TouchableOpacity>

        <View style={{alignItems: 'center', marginTop: 150}}>
          <TouchableOpacity
            style={{fontSize: 15}}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.submitButtonText}> Sign In </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    paddingHorizontal: 10,
    borderRadius: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#F5DEB3',
    padding: 15,
    marginLeft: 85,
    marginRight: 85,
    marginTop: 15,
    height: 50,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  submitButtonText: {
    color: 'black',
  },
  form: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default withNavigation(connect(mapStateToProps)(Register));
