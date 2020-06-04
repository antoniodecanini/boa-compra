import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewStyle: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 16,
    paddingTop: 16,
  },

  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 3,
    borderBottomWidth: 2,
    borderBottomColor: '#999'
  },

  txtList: {
    width: '60%',
    fontSize: 20,
    fontWeight: 'bold',
  },

  txtCreatedAt: {
    width: '40%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  viewLists: {
    marginTop: 6,
  },

  btnList: {
    flexDirection: 'row',
    marginTop: 6,
    backgroundColor: '#ddd',
    borderRadius: 50,
    padding: 7,
  },

  txtBtnList: {
    width: '60%',
    fontSize: 20,
  },

  txtBtnCreatedAt: {
    width: '40%',
    fontSize: 20,
  },

  btnNewList: {
    marginTop: 24,
    padding: 5,
    backgroundColor: '#6bcded',
    width: '30%',
    borderRadius: 50,
  },

  txtBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },
});