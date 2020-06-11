import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  
  viewStyle: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 16,
    paddingTop: statusBarHeight + 10,
  },

  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 3,
  },

  txtList: {
    width: '60%',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 10,
  },

  txtCreatedAt: {
    width: '40%',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 0,
  },
  
  viewLists: {
    marginTop: 0,
  },

  flatList: {
    flexGrow: 0,
  },

  btnList: {
    flexDirection: 'row',
    marginTop: 6,
    backgroundColor: 'rgba(107, 205, 237, 0.4)',
    borderRadius: 10,
    padding: 8,
  },

  txtBtnList: {
    width: '60%',
    fontSize: 22,
    color: '#fff',
  },

  txtBtnCreatedAt: {
    width: '40%',
    fontSize: 22,
    color: '#fff',
  },

  btnNewList: {
    marginTop: 24,
    padding: 10,
    backgroundColor: '#6bcded',
    width: '30%',
    borderRadius: 10,
  },

  txtBtn: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },
});