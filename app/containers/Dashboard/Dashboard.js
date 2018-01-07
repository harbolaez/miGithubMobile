import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import {
  Button
} from 'native-base';

import {
  UserProfile
} from '../../components'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F1FAEE',
    justifyContent: 'flex-start',
  },
});

export default class Dashbaord extends Component {

  render(){
    const { navigation } = this.props;
    return(
      <View style={styles.container}>
        <UserProfile />
      </View>
    )
  }
}
