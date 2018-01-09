import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  profile: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 15,
    backgroundColor: '#F71735',
  },
  topProfile: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 18
  },
  name: {
    fontSize: 20,
    color: '#F1FAEE',
    marginBottom: 8,
    minHeight: 19,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 6,
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 15,
  },
  repoButton: {
    width: '100%',
    marginTop: 4,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
  },
  bioText: {
    lineHeight: 18,
    fontSize: 16,
    textAlign: 'center',
    color: '#F1FAEE'
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
  },
  statItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  statTotal: {
    fontSize: 18,
    color: '#F1FAEE',
    marginBottom: 2,
  },
  statTitle: {
    color: '#F1FAEE',
    fontSize: 14,
  },
  repoBtnWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
})