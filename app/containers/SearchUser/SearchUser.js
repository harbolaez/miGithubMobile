import React, { Component } from 'react';

import {
  StyleSheet, View, Text,
} from 'react-native';

import {
  Form, Item, Input
} from 'native-base';

export default class SearchUser extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const { navigation } = this.props;
    return(
      <View>
        <Form>
          <Item last>
            <Input placeholder="Search" />
          </Item>
        </Form>
      </View>
    )
  }
}
