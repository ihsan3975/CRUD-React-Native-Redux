import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, AsyncStorage} from 'react-native';
// import {Image} from 'react-native-elements';

const LoadingScreen = props => {
  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(value => {
        if (value.length > 0) {
          props.navigation.navigate('App');
        }
      })
      .catch(() => props.navigation.navigate('Login'));
  }, []);

  return (
    <View>
      <Image
        source={require('../src/public/img/loading.png')}
        style={{
          width: 250,
          height: 250,
          alignItems: 'center',
          marginLeft: 60,
          marginTop: 130,
        }}
      />
    </View>
  );
};

export default LoadingScreen;
