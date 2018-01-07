import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  dFlex: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    overflow: 'scroll',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  label: {
    marginTop: 15,
    marginBottom: 10,
    color: '#aeb6c0',
    letterSpacing: .6,
    fontSize: 14,
  },
  paddingAround5: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  whiteColor: {
    color: '#F1FAEE',
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
});
