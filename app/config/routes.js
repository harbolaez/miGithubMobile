import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

// Containers
import {
  Dashboard
} from '../containers'

const Tabs = TabNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      headerTitle: 'Dashboard',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={28}
          style={{ color: tintColor }}
        />
      ),
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={28}
          style={{ color: tintColor }}
        />
      ),
    },
  },
}, {
  order: ["Dashboard"],
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#FFFFFF',
    labelStyle: {},
    tabStyle: {},
    style: {
      backgroundColor: '#261447',
    },
  }

});

const RootDrawer = DrawerNavigator({
  Tabs: { screen: Tabs },
});

const stackNavigator = StackNavigator({
  Dashboard: {
    screen: RootDrawer,
  },
}, {
  initialRouteName: 'Dashboard',
})


export default stackNavigator;