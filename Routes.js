import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AddProduct from './screens/AddProduct';
import ListProduct from './screens/ListProduct';

const Routes = createStackNavigator(
  {
    AddProduct,
    ListProduct,
  },
  {
    initialRouteName: 'AddProduct',
  },
);

export default createAppContainer(Routes);
