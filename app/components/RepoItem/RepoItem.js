import React, { Component } from 'react';

import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';

import repoItemStyles from './repoItemStyles';
import ItemList from './ItemList';

import { Actions } from 'react-native-router-flux'; // New code

const RepoItem = ({ repo }) => {
  return (
    <TouchableOpacity onPress={() => Actions.userRepo({
      id: repo.id,
      repoName: repo.name
    })}>
      { !!repo && <ItemList repo={repo} /> }
    </TouchableOpacity>
  )
}

export default RepoItem;