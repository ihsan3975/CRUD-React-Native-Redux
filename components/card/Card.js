import React, {PureComponent, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View, ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {withNavigation} from 'react-navigation';

class Card extends PureComponent {
  render() {
    limdes = this.props.item.description.slice(0, 8) + '...';
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          this.props.navigation.navigate('ProductById', {
            id: this.props.item.id,
          })
        }>
        <View style={{flexDirection: 'row'}}>
        <ImageBackground style={styles.cardImage} source={{uri: 'https://media.istockphoto.com/vectors/caution-exclamation-mark-red-white-color-icon-isolated-vector-vector-id938976216?k=6&m=938976216&s=170667a&w=0&h=DLKR_3Bqw9tmgRwk8pnrfeNTBGEfxrccuwGI66zEQO4='}}>
          <Image
            style={styles.cardImage}
            source={{uri: this.props.item.image}}
            // source={{uri: 'https://media.istockphoto.com/vectors/caution-exclamation-mark-red-white-color-icon-isolated-vector-vector-id938976216?k=6&m=938976216&s=170667a&w=0&h=DLKR_3Bqw9tmgRwk8pnrfeNTBGEfxrccuwGI66zEQO4='}}
          />
        </ImageBackground>

          <View>
            {/* <Text style={styles.cardText}>{this.props.item.name}</Text> */}
            <Text style={styles.cardText}>
              {this.props.item.name.slice(0, 20)}
            </Text>
            <View
              style={{
                backgroundColor: '#ebdcb2',
                width: 80,
                height: 18,
                marginLeft: 5,
                borderRadius: 90,
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  paddingLeft: 10,
                  paddingBottom: 7,
                  color: '#232b2b',
                }}>
                <Text color="#232b2b">Stock: </Text>
                {this.props.item.quantity}
              </Text>
            </View>
            <Text
              style={{color: '#707c80', paddingLeft: 10, marginTop: 11}}
              numberOfLines={1}>
              {limdes}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FDFFFC',
    marginBottom: 10,
    marginLeft: '4%',
    width: '93%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 3,
    padding: 5,
  },
  cardImage: {
    width: 105,
    height: 110,
    resizeMode: 'cover',
    borderRadius: 3,
    borderColor: '#ddd',
    // backgroundColor: 'https://media.istockphoto.com/vectors/caution-exclamation-mark-red-white-color-icon-isolated-vector-vector-id938976216?k=6&m=938976216&s=170667a&w=0&h=DLKR_3Bqw9tmgRwk8pnrfeNTBGEfxrccuwGI66zEQO4='
  },
  cardText: {
    // padding: 10,
    fontSize: 21,
    paddingLeft: 10,
    paddingTop: 15,
    color: '#232b2b',
  },
});

export default withNavigation(Card);
