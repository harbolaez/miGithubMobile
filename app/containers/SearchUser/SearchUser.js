import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import { connect } from 'react-redux';

import {
  StyleSheet, View, Text, ScrollView, Image, TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import styles from '../../sharedStyles/SearchStyles';

import {
  Item, Input, Button
} from 'native-base';

import {
  fetchUsers
} from '../../utils/api'

import {
  fetchUser,
  fetchRepos
} from '../../actions'

const SearchProfile = ({ user, fetchUser }) => {
  return (
    <TouchableOpacity
      style={styles.topProfile}
      onPress={() => Actions.dashboard({username: user.login})}
    >
      <Image style={styles.avatar} source={{uri: user.avatar_url}} />
      <View style={styles.profileInfo}>
        <Text style={styles.login}>{user.login}</Text>
      </View>
    </TouchableOpacity>
  )
}

class SearchUser extends Component {

  constructor(props){
    super(props);
    this.state = {
      textQuery: '',
      users: []
    }
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(){
    fetchUsers(this.state.textQuery)
    .then((res) => this.setState(() => ({ users: res.data })))
  }

  render(){
    const { navigation } = this.props;
    let { textQuery, users } = this.state;
    return(
      <View style={styles.padding10}>
        <Item last>
          <Input
            placeholder="Search by username..."
            onChangeText={(textQuery) => this.setState({textQuery})}
            value={textQuery}
          />
        </Item>
        <View style={styles.searchContainer}>
          <Button block onPress={this._handleSubmit} stlye={styles.width200}>
            <Text style={styles.searchBtn}>{"Search".toUpperCase()}</Text>
          </Button>
        </View>
        <ScrollView>
          { !_.isEmpty(users) && users.items.length > 0
            ? users.items.map((user, ix) => <SearchProfile
                                                key={ix}
                                                user={user}
                                                fetchUser={this.props.fetchUser}
                                                fetchRepos={this.props.fetchRepos}
                                              />)
            : null
          }
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(mapStateToProps, {
  fetchUser,
  fetchRepos
})(SearchUser);