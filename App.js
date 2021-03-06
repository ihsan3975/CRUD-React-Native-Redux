import React, {Component} from 'react';
import axios from 'axios';
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import {TabNavigator} from 'react-navigation';
// import Icon from 'react-native-ionicons';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import Rpm from 'redux-promise-middleware';
import reducer from './src/reducers/index';
import {Provider} from 'react-redux';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AddProduct from './screens/AddProduct';
import ListProduct from './screens/ListProduct';
import ProductById from './components/ProductById';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import Settings_Activity from './screens/Settings_Activity';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';
import Login from './components/Login';
import LoadingScreen from './components/LoadingScreen';
import Profile from './components/Profile';
import Register from './components/Register';
import Categories from './components/Categories';
import AddCategory from './components/AddCategory';
import CategoryById from './components/CategoryById';
import EditCategory from './components/EditCategory';
import SplashScreen from './screens/SplashScreen'
// import MainApp from './screens/footer/footer';

const logger = createLogger();

// import Routes from './Routes';

axios.defaults.baseURL = 'http://192.168.43.83:4000';
const store = createStore(reducer, applyMiddleware(logger, Rpm));

const Routes = createStackNavigator(
  {
    ProductById,
    AddProduct,
    ListProduct,
    Settings_Activity,
    EditProduct,
    DeleteProduct,
    AddCategory,
    CategoryById,
    EditCategory,
  },
  {
    initialRouteName: 'ListProduct',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const MainNavigator = createBottomTabNavigator(
  {
    Products: Routes,
    AddProduct,
    Categories,
    Profile,
  },
  {
    initialRouteName: 'Products',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Products') {
          return (
            <Icon
              name="home"
              style={{
                width: 20,
                height: 20,
              }}
              color="#ddbc95"
            />
          );
        }
        if (routeName === 'AddProduct') {
          return (
            <Icon
              name="add-circle"
              style={{
                width: 20,
                height: 20,
              }}
              color="#ddbc95"
            />
          );
        }
        if (routeName === 'Categories') {
          return (
            <Icon
              name="view-carousel"
              style={{width: 20, height: 20}}
              color="#ddbc95"
            />
          );
        } else {
          return (
            <Icon name="face" style={{width: 20, height: 20}} color="#ddbc95" />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ddbc95',
      inactiveTintColor: '#263238',
      style: {
        backgroundColor: '#626d71',
      },
    },
  },
);

const AuthNavigator = createSwitchNavigator(
  {
    LoadingScreen,
    Login,
    Register,
    SplashScreen,
    App: MainNavigator,
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

const Navigation = createAppContainer(AuthNavigator);

const App = props => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
  // }
};
export default App;
