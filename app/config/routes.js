import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Router, Scene, Actions } from 'react-native-router-flux';

import { connect, Provider } from 'react-redux';
import configureStore from '../store/configureStore';
const store = configureStore();
const RouterWithRedux = connect()(Router);


// Containers
import {
  Dashboard,
  SearchUser,
} from '../containers'

import {
  UserRepo,
} from '../components'

const styles = StyleSheet.create({
  dashboardHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const Right = () => {
  return (
    <Icon name="address-card" size={26}
      style={{
        marginRight: 'auto',
        position: 'absolute',
        left: 10,
      }}
      onPress={() => Actions.searchUser({name: 'Lucy'})}
    />
  )
}

// export default stackNavigator;
const router = () => {
  return (
    <Provider store={store}>
      <RouterWithRedux>
        <Scene key="root">
          <Scene key="dashboard"
            component={Dashboard}
            initial
            title={"Dashboard"}
            renderLeftButton={() => <Right />}
          />
          <Scene key="searchUser" component={SearchUser} title="Searching" />
          <Scene key="userRepo" component={UserRepo} title="Repository" />
        </Scene>
      </RouterWithRedux>
    </Provider>
  )
}

export default router;