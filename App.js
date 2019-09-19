import React, {Component} from 'react';
import axios from 'axios';
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import {TabNavigator} from 'react-navigation';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import Rpm from 'redux-promise-middleware';
import reducer from './src/reducers/index';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AddProduct from './screens/AddProduct';
import ListProduct from './screens/ListProduct';
import ProductById from './components/ProductById';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import Settings_Activity from './screens/Settings_Activity';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';
import Login from './components/Login';
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

    Login,
  },
  {
    initialRouteName: 'Login',
  },
);

const MainNavigator = createBottomTabNavigator(
  {
    Products: Routes,
    AddProduct,
  },
  {
    initialRouteName: 'Products',
  },
);

const Navigation = createAppContainer(Routes);
const BottomBar = createAppContainer(MainNavigator);

// export default class App extends Component {
//   render() {
const App = props => {
  return (
    <Provider store={store}>
      {/* <Navigation /> */}
      <BottomBar />
    </Provider>
  );
  // }
};
export default App;
