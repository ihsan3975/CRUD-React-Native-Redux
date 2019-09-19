import React, {Component} from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import ListProduct from './screens/ListProduct';
import Settings_Activity from './screens/Settings_Activity';
import Details_Activity from './screens/Details_Activity';
import AddProduct from './screens/AddProduct';
import axios from 'axios';
import Routes from './Routes';
import AddProduct from '../AddProduct';

const MainApp = createBottomTabNavigator(
  {
    Home: AddProduct,
    // Settings: SettingsTab,
    // Add: AddTab,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={require('./src/public/icon/home.png')}
              style={{width: 20, height: 20}}
            />
          );
        }
        if (routeName === 'Settings') {
          return (
            <Image
              source={require('./src/public/icon/category.png')}
              style={{width: 20, height: 20}}
            />
          );
        } else {
          return (
            <Image
              source={require('./src/public/icon/add.png')}
              style={{width: 20, height: 20}}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  },
);

export default MainApp;
