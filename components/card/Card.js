import React, {PureComponent} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
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
          <Image
            style={styles.cardImage}
            source={{uri: this.props.item.image}}
          />
          <View>
            {/* <Text style={styles.cardText}>{this.props.item.name}</Text> */}
            <Text style={styles.cardText}>{this.props.item.name}</Text>
            <View
              style={{
                backgroundColor: '#ebdcb2',
                width: 80,
                height: 18,
                marginLeft: 5,
                borderRadius: 90,
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
            <Text style={{color: '#707c80', paddingLeft: 10}} numberOfLines={1}>
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
    backgroundColor: '#fff',
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
  },
  cardImage: {
    width: 105,
    height: 110,
    resizeMode: 'cover',
    borderRadius: 3,
    borderColor: '#ddd',
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
