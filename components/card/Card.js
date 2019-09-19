import React, {PureComponent} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {withNavigation} from 'react-navigation';

class Card extends PureComponent {
  render() {
    return (
      // <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          this.props.navigation.navigate('ProductById', {
            id: this.props.item.id,
          })
        }>
        <Image style={styles.cardImage} source={{uri: this.props.item.image}} />
        <Text style={styles.cardText}>{this.props.item.name}</Text>
        <Text style={{fontSize: 13, paddingLeft: 10, paddingBottom: 7}}>
          stock: {this.props.item.quantity}
        </Text>
      </TouchableOpacity>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //     marginTop: 20,
  //     backgroundColor: '#f5fcff'
  // },
  card: {
    backgroundColor: '#f0e0d0',
    marginBottom: 10,
    marginLeft: '4%',
    width: '93%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    borderRadius: 7,
    shadowOffset: {
      width: 100,
      height: 100,
    },
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 7,
  },
  cardText: {
    // padding: 10,
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 7,
  },
});

export default withNavigation(Card);
