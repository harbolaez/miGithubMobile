import React from 'react';
import PropTypes from 'prop-types';
import repoItemStyles from './repoItemStyles';
import moment from 'moment';

import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';

const ItemList = (props) => {
  const { repo } = props;
  return (
    <View style={repoItemStyles.item}>
      <Text style={repoItemStyles.title}> { repo.name.toLowerCase() } </Text>
      <Text style={[repoItemStyles.updated, repoItemStyles.label]}> {`Updated ${moment(new Date(repo.updated_at)).fromNow()}`}  </Text>
      <View style={repoItemStyles.info}>
        <Text style={[repoItemStyles.label, repoItemStyles.language]}> {repo.language} </Text>
      </View>
    </View>
  )
}

ItemList.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default ItemList;