import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import repoItemStyles from './repoItemStyles';

const RepoItem = ({title, repo}) => {
  return (
    <TouchableOpacity>
      <View style={repoItemStyles.item}>
        <Text style={repoItemStyles.title}> { title.toLowerCase() } </Text>
        <Text style={[repoItemStyles.updated, repoItemStyles.label]}> Updated 7 month ago </Text>
        <View style={repoItemStyles.info}>
          <Text style={[repoItemStyles.label, repoItemStyles.language]}> {"Ruby"} </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RepoItem;