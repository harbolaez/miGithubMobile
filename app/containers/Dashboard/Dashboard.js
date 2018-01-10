import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import {
  StyleSheet, View, Text, ScrollView, FlatList,
} from 'react-native';

import {
  Button, Spinner,
} from 'native-base';

import {
  fetchUser, fetchPopularRepos,
} from '../../actions'

import {
  UserProfile, RepoItem,
} from '../../components'

import styles from './styles'

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
    const { username, fetchUser, fetchPopularRepos } = this.props;
    const loginUser = _.isUndefined(username) ? "henryarbolaez" : username;
    fetchUser(loginUser)
    fetchPopularRepos(loginUser, 10)
  }

  render(){
    const { popularRepos } = this.props;
    return(
      <ScrollView>
        <View style={styles.container}>
          <UserProfile
            user={this.props.user}
          />
          <View style={styles.paddingAround5}>
            <Text style={[styles.label, {fontSize: 16}]}>{"Most Pupulars".toUpperCase()}</Text>
            {_.isEmpty(popularRepos.data) ? <Spinner color='red' /> : (
              <FlatList
                data={popularRepos.data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
              />
            )}
            <View>
              <Button dark style={styles.allRepoButton} onPress={() => Actions.repoSearch()}>
                <Text style={[styles.whiteColor]}>{"View all Repos".toUpperCase()}</Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}


const mapStateToProps = ({ user, popularRepos  }) => {
  return {
    user,
    popularRepos
  }
}

export default connect(mapStateToProps, {
  fetchUser,
  fetchPopularRepos
})(Dashbaord)

