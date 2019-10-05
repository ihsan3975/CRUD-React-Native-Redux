import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, AsyncStorage, Dimensions} from 'react-native';
import {NavigationEvents} from 'react-navigation'
// import {Image} from 'react-native-elements';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(function(){
      props.navigation.navigate('LoadingScreen')
    }, 2500)
  }, [])
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View>
      <Image
        source={require('../src/public/img/splash.jpg')}
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

export default SplashScreen;
