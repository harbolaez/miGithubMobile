import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, Text, Image, Linking,
} from 'react-native';
import {
  Button, Spinner,
} from 'native-base';

import userStyle from './userProfileStyles';

const UserProfile = (props) => {
  const user = props.user;
  if (!user) {
    return (
      <Spinner color='red' />
    )
  }
  const stats = [{title: 'Followers', total: user.followers}, {title: 'Public Repos', total: user.public_repos}, {title: 'Following', total: user.following}]
  return (
    <View style={userStyle.profile}>
      <View style={userStyle.topProfile}>
        <Image
          style={userStyle.avatar}
          source={{uri: user.avatar_url}}
        />
        <View style={userStyle.profileInfo}>
          <Text style={userStyle.name}>{user.name}</Text>
          <Text style={{color: '#F1FAEE', marginBottom: 5}}>{user.login}</Text>
          <Button dark block onPres={() => { Linking.openURL(user.html_url)}} >
            <Text style={{color: '#F1FAEE'}}>{"Profile".toUpperCase()}</Text>
          </Button>
        </View>
      </View>
      <View style={userStyle.userBio}>
        <Text style={userStyle.bioText}>
          {user.bio}
        </Text>
      </View>
      <View style={userStyle.stats}>
        {stats.map((stat, ix) => {
          return (
            <View key={ix} style={userStyle.statItem}>
              <Text style={[userStyle.boldText, userStyle.statTotal]}>{stat.total}</Text>
              <Text style={userStyle.statTitle}>{stat.title}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

UserProfile.propTypes = {
  user: PropTypes.object,
};

export default UserProfile;