import {
  StyleSheet
} from 'react-native';


export default StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 2,
    borderRadius: 6,
    borderColor: '#011627',
    backgroundColor: '#FDFFFC',
    minHeight: 50,
    marginBottom: 5,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  label: {
    color: '#AEB6C0',
    letterSpacing: .6,
    fontSize: 14,
  },
  updated: {
    marginTop: 5,
  },
  info: {
    display: 'flex',
  },
  language: {
    fontSize: 15,
    marginTop: 10,
    color: '#011627',
    fontWeight: 'bold',
  },
})
