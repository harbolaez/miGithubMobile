import {
  StyleSheet,
} from 'react-native';


export default StyleSheet.create({
  padding10: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  width100: {
    minWidth: 100
  },
  width200: {
    minWidth: 550
  },
  topProfile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    backgroundColor: '#120D31',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 6,
    marginBottom: 5,
  },
  searchBtn: {
    color: '#F1FAEE',
    fontWeight: '600'
  },
  login: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 6,
  },
  whiteColor: {
    color: 'white'
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 15,
  },
  allRepoButton: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
  },
})