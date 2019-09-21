import React, {Component} from 'react';
import axios from 'axios';
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import {TabNavigator} from 'react-navigation';
import Ionicons from 'react-native-ionicons';
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
// import MainApp from './screens/footer/footer';

const logger = createLogger();

// import Routes from './Routes';

// axios.defaults.baseURL = 'http://192.168.1.18:4000';
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
    navigationOptions: {
      tabBarIcon: ({focused, tintColor}) => {
        const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    },
  },
);

const AuthNavigator = createSwitchNavigator(
  {
    LoadingScreen,
    Login,
    Register,
    App: MainNavigator,
  },
  {
    initialRouteName: 'App',
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
