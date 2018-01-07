import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';

import {
  UserProfile,
  RepoItem
} from '../../components'

import {
  Button,
} from 'native-base';

import styles from './styles'

export default class Dashbaord extends Component {

  constructor(props){
    super(props);
    this._keyExtractor = this._keyExtractor.bind(this);
    this._renderItem = this._renderItem.bind(this);
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem({item, index}){
    return (
      <RepoItem
        key={index}
        repo={item}
        title={"Test"}
      />
    )
  }

  render(){
    const { navigation } = this.props;
    return(
      <ScrollView>
        <View style={styles.container}>
          <UserProfile />
          <View style={styles.paddingAround5}>
            <Text style={[styles.label, {fontSize: 16}]}>{"Most Pupulars".toUpperCase()}</Text>
            <FlatList
              data={[{id: 1, item: 'a'}, {id: 2, item: 'b'}]}
              extraData={1}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
            <View>
              <Button dark style={styles.allRepoButton}>
                <Text style={[styles.whiteColor]}>{"View all Repos".toUpperCase()}</Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}
