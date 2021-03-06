import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, AsyncStorage, Dimensions} from 'react-native';
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

  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View>
      <Image
        source={require('../src/public/img/loading.gif')}
        style={{
          width: screenWidth,
          height: screenHeight,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
    </View>
  );
};

export default LoadingScreen;
