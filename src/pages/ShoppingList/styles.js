import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewStyle: {
    flex: 1,
    width: '95%',
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 16,
    paddingBottom: 16,
  },

  txtCreatedAt: {
    alignSelf: 'flex-end',
    fontSize: 16,
  },

  viewList: {
    marginTop: 10,
  },

  flatList: {
    flexGrow: 0,
  },

  vwItemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },

  input: {
    borderBottomColor: '#999',
    borderBottomWidth: 2,
  },

  itemField: {
    width: '59%',
  },

  qtdField: {
    width: '10%',
  },

  priceField: {
    width: '18%',
  },

  btnRemove: {
    width: '5%',
    backgroundColor: 'red',
    justifyContent: 'center',
    borderRadius: 50,
  },

  txtRemove: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },

  btnNewItem: {
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

  txtTotal: {
    marginTop: 20,
    backgroundColor: '#7c6fd1',
    padding: 5,
    width: '80%',
    borderRadius: 50,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },  
});