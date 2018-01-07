import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import {
  Button
} from 'native-base';

import userStyle from './userProfileStyles';

const UserProfile = (props) => {
  const stats = [{title: 'Followers', total: 34}, {title: 'Public Repos', total: 19}, {title: 'Following', total: 9}]
  return (
    <View style={userStyle.profile}>
      <View style={userStyle.topProfile}>
        <Image
          style={userStyle.avatar}
          source={{uri: 'https://avatars3.githubusercontent.com/u/13140872?v=4'}}
        />
        <View style={userStyle.profileInfo}>
          <Text style={userStyle.name}>Henry Arbolaez</Text>
          <Text style={{color: '#F1FAEE', marginBottom: 5}}>henryarbolaez</Text>
          <Button success style={userStyle.repoButton}>
            <Text style={{color: '#F1FAEE', fontSize: 16, fontWeight: 'bold'}}>{'View Rpositories'.toUpperCase()}</Text>
          </Button>
        </View>
      </View>
      <View style={userStyle.userBio}>
        <Text style={userStyle.bioText}>
          I’m Henry Arbolaez a fast learner, always pushing myself to accomplish any goal and a team player who is very proficient with the web tools.
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

export default UserProfile;