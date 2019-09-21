import React, {useState, useEffect, Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../src//actions/users';

import {
  View,
  Text,
  AsyncStorage,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
// import {Button} from 'native-base';
import {withNavigation} from 'react-navigation';

export class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  async logout() {
    AsyncStorage.clear();
    await this.props.dispatch(logout());
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <View>
        <Image
          source={require('../src/public/img/logout.png')}
          style={{
            width: 250,
            height: 250,
            alignItems: 'center',
            marginLeft: 60,
            marginTop: 130,
          }}
        />
        <TouchableOpacity
          onPress={() => this.logout()}
          style={{
            width: 75,
            height: 45,
            backgroundColor: '#fdcb6e',
            borderRadius: 5,
            alignItems: 'center',
            padding: 10,
            marginTop: 15,
            marginLeft: 145,
          }}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default withNavigation(connect(mapStateToProps)(Profile));
