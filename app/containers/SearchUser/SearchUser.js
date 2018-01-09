import React, { Component } from 'react';

import {
  StyleSheet, View, Text,
} from 'react-native';

export default class SearchUser extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const { navigation } = this.props;
    return(
      <View>
        <Text>SearchUser</Text>
      </View>
    )
  }
}
