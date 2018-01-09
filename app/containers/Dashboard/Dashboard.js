import React, { Component } from 'react';

import {
  StyleSheet, View, Text, ScrollView, FlatList,
} from 'react-native';

import {
  Button, Spinner,
} from 'native-base';

import styles from './styles'

import _ from 'lodash';

import { connect } from 'react-redux';

import {
  fetchUser, fetchRepos,
} from '../../actions'

import {
  UserProfile, RepoItem,
} from '../../components'


class Dashbaord extends Component {

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
      />
    )
  }

  componentDidMount(){
    this.props.fetchUser("henryarbolaez")
    this.props.fetchRepos("henryarbolaez", 8)
  }

  render(){
    const { repos } = this.props;
    return(
      <ScrollView>
        <View style={styles.container}>
          <UserProfile
            user={this.props.user}
          />
          <View style={styles.paddingAround5}>
            <Text style={[styles.label, {fontSize: 16}]}>{"Most Pupulars".toUpperCase()}</Text>
            {_.isEmpty(repos) ? <Spinner color='red' /> : (
              <FlatList
                data={repos}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
              />
            )}
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


const mapStateToProps = ({ user, repos }) => {
  return {
    user,
    repos
  }
}

export default connect(mapStateToProps, {
  fetchUser,
  fetchRepos
})(Dashbaord)

