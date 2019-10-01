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

import {login} from '../src/actions/users';
import {connect} from 'react-redux';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handlerSubmit = async () => {
    await this.props.dispatch(login(this.state));
    this.setState({
      token: this.props.users.usersProfile,
    });

    if (!this.props.users.token.data.token === true) {
      alert('Wrong Email or Password');
    } else {
      AsyncStorage.setItem('token', this.props.users.token.data.token);
      this.props.navigation.navigate('ListProduct');
    }

    // AsyncStorage.getItem('token').then(res =>
    //   this.setState({
    //     token: res,
    //   }),
    // );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Text style={{fontWeight: 'bold', fontSize: 30, marginTop: 40}}>
            Sign In
          </Text>
        </View>
        <View
          style={{
            marginLeft: 35,
            marginRight: 35,
            marginTop: 20,
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
          }}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            name="email"
            onChangeText={email => this.setState({email})}
          />
        </View>

        <View
          style={{
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
          }}>
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
          <Text style={styles.submitButtonText}> SIGN IN </Text>
        </TouchableOpacity>

        <View style={{alignItems: 'center', marginTop: 200}}>
          <TouchableOpacity
            style={{fontSize: 15}}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.submitButtonText}> Sign Up </Text>
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
    // flex: 1,
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default withNavigation(connect(mapStateToProps)(Login));
