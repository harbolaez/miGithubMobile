import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  padding10: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  markdown: {
  },
  fileWrapper: {
  },
  fileContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 5,
    backgroundColor: '#FDFFFC',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 6,
    borderColor: '#eee',
  },
  fileItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  fileText: {
    color: '#011627',
    fontSize: 16,
    marginBottom: 5,
  },
  langItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  langColor: {
    marginRight: 10,
  },
})