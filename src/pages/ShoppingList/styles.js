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
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: statusBarHeight + 10,
    paddingBottom: 16,
  },

  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 3,
  },

  headerPt2: {
    flexDirection: 'row',
  },

  btnBack: {
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 10,
    padding: 5
  },

  listName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },

  btnNewItem: {
    padding: 5,
    backgroundColor: 'rgba(107, 205, 237, 0.9)',
    borderRadius: 10,
  },

  txtBtnNewItem: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },

  viewList: {
    marginTop: 5,
  },

  headerList: {
    flexDirection: 'row',
  },

  txtItem: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
    width: '50%',
    paddingLeft: 5,
  },

  txtAmount: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
    width: '17%',
    paddingLeft: 10,
  },

  txtPrice: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
    width: '20%',
    paddingLeft: 22,
  },

  flatList: {
    flexGrow: 0,
  },

  vwItemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 3,
  },

  input: {
    color: '#fff',
    fontSize: 23,
    marginTop: 3,
    fontWeight: 'bold',
    backgroundColor: 'rgba(107, 205, 237, 0.4)',
    borderRadius: 10,
    padding: 5
  },

  itemField: {
    width: '50%',
  },

  qtdField: {
    width: '17%',
  },

  priceField: {
    width: '20%',
  },

  btnRemove: {
    width: '5%',
    justifyContent: 'center',
  },

  iconRemove: {
    
  },

  txtBtn: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },

  btnSaveList: {
    marginTop: 20,
    backgroundColor: '#6bcded',
    padding: 8,
    width: '80%',
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },  

  btnCalcTotal: {
    marginTop: 10,
    backgroundColor: '#6bcded',
    padding: 8,
    width: '80%',
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
});