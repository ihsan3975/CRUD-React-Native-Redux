import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, FlatList, Image, TouchableOpacity, Platform, BackHandler, Alert} from 'react-native';
import { ThemeProvider, Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'


import axios from 'axios'

import Card from './card/Card'
import { Actions } from 'react-native-router-flux';

export default class DashBoard extends Component {
  state = {
    products : []
  }

  async componentDidMount () {
    await axios.get(`http://192.168.1.18:4000/products`)
    .then(response => 
      this.setState({
        products: response.data.data
      }))
  }

  render() {
    const item = this.state.products
    return (
      <React.Fragment>
      <Header 
        containerStyle={{
          backgroundColor:'#755139FF',
          paddingTop: 0,
          height: 60
        }}
        leftComponent={{ icon: 'list', color: '#fff' }}
        centerComponent={{ text: 'Hi Admin', style: { color: '#fff' } }}
        rightComponent={{ icon: 'details', color: '#fff' }}
        />
      <View style={{flex:1}}>
        <FlatList
          style={styles.container} 
          data={this.state.products}
          renderItem={({item}) => <Card item={item}/>}
          keyExtractor={({id}, index) => id.toString()}
        />
        <ScrollView>
  
          </ScrollView>
          <View style={{height:45, flexDirection: 'row'}}>
          <TouchableOpacity 
            style={{flex:1}}
            onPress={() => {
            Actions.dashBoard()
            }}
            >
            <View style={{flex: 1, alignItems: 'center', borderTopRightRadius: 25}}>
              <Icon style={{marginTop:7}} name='ios-albums' size={25}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {
            Actions.addProduct()
            }}          
          >
            <View style={{  alignItems: 'center', width:50, height:50, borderRadius: 15}}>
              <Icon style={{marginTop: 9}} name='ios-add-circle' size={25} color='#deb887'/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{flex:1}}
              onPress={() => {
                Actions.categories()
              }}
              >
            <View style={{ alignItems: 'center', flex: 1, borderTopLeftRadius: 25 }}>
              <Icon style={{marginTop: 7}} name='ios-apps' size={25} color='#deb887'/>
            </View>
            </TouchableOpacity>
          </View>
      </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#f5fcff'
  }
})