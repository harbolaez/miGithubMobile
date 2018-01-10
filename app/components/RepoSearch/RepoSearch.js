import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import _ from 'lodash';

import {
  StyleSheet, View, Text, ScrollView, FlatList,
} from 'react-native';

import {
  Button, Spinner, Item, Input,
} from 'native-base';

import styles from '../../sharedStyles/SearchStyles';

import {
  fetchUser, fetchRepos, searchRepos
} from '../../actions'

import {
  UserProfile, RepoItem,
} from '../../components'

class RepoSearch extends Component {

  constructor(props){
    super(props);

    this.state = {
      query: '',
      page: 2,
      hasSearch: false
    }

    this._keyExtractor  = this._keyExtractor.bind(this);
    this._renderItem    = this._renderItem.bind(this);
    this._handleSubmit  = this._handleSubmit.bind(this);
    this._loadMore      = this._loadMore.bind(this);
    this._resetRepos    = this._resetRepos.bind(this);
  }

  _keyExtractor = (item, index) => `search_${item.id}`

  _renderItem({item, index}){
    return (
      <RepoItem key={index} repo={item} />
    )
  }

  componentDidMount(){
    const { user, fetchRepos} = this.props
    fetchRepos(user.login, 10, 1)
  }

  _handleSubmit(){
    const { query } = this.state;
    const { repos, user, searchRepos, fetchRepos} = this.props
    if (query.length > 0) {
      searchRepos(repos, query)
      this.setState((prevState) => ({ hasSearch: true }))
    }else {
      fetchRepos(user.login, 10, this.state.page)
    }

  }

  _loadMore(){
    const { repos, user, fetchRepos } = this.props
    if (!!repos.nextUrl) {
      fetchRepos(user.login, 10, this.state.page)
      this.setState((prevState) => ({ page: prevState.page + 1, hasSearch: false }))
    }
  }

  _resetRepos(){
    const { repos, user, fetchRepos } = this.props
    fetchRepos(user.login, 10, 1)
    this.setState({query: '', page: 2, hasSearch: false})
  }

  render(){
    const { repos } = this.props;
    const { query, hasSearch } = this.state;
    return(
      <View style={styles.padding10}>
        <Item last>
          <Input
            placeholder="Search by repo..."
            onChangeText={(query) => this.setState({query})}
            value={query}
          />
        </Item>
        <View style={styles.searchContainer}>
          <Button block onPress={this._handleSubmit} stlye={styles.width200}>
            <Text style={styles.searchBtn}>{"Search".toUpperCase()}</Text>
          </Button>
        </View>
        <ScrollView style={styles.paddingAround5}>
          {_.isEmpty(repos.data) ? <Spinner color='red' /> : (
            <FlatList
              data={repos.data}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          )}
          <View style={{marginBottom: 125}}>
            <Button dark style={styles.allRepoButton} onPress={this._loadMore}>
              <Text style={[styles.whiteColor]}>{"Search More".toUpperCase()}</Text>
            </Button>
            {query.length > 0 && hasSearch && (<Button danger style={styles.allRepoButton} onPress={this._resetRepos}>
              <Text style={[styles.whiteColor]}>{"Reset".toUpperCase()}</Text>
            </Button>)}
          </View>
        </ScrollView>
      </View>
    )
  }
}


const mapStateToProps = ({ user, repos }) => {
  return {
    user,
    repos
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchUser, fetchRepos, searchRepos} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoSearch)

