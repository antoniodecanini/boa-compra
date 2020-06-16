import React, { Component } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import data from '../../assets/data.json';

function ShoppingList() {
  const navigation = useNavigation();
  const route = useRoute();

  const listId = route.params.id;

  const [listName, onChangeListName] = React.useState('');
  const [list, onChangeList] = React.useState([]);
  const [newItem, onChangeNewItem] = React.useState('');
  const [item, onChangeItem] = React.useState('');
  const [amount, onChangeAmount] = React.useState('');
  const [price, onChangePrice] = React.useState('');

  function handleAdd() {
    if(newItem.trim()) {
      onChangeList([...list, {
        item: newItem,
        amount: amount,
        price: price
      }]);
    }
    onChangeNewItem('');
  }

  function RenderItem({ item, amount, price }) {
    return (
      <View style={styles.vwItemList}>
        <TextInput
          style = {[ styles.input, styles.itemField ]}
          onChangeText = { text => onChangeItem(text) }
          value = { item }
          placeholder = "Item"
        />

        <TextInput
          style = {[ styles.input, styles.qtdField ]}
          onChangeText = { text => onChangeQtd(text) }
          value = { amount }
          keyboardType = "decimal-pad"
          placeholder = "Qtd"
        />

        <TextInput
          style = {[ styles.input, styles.priceField ]}
          onChangeText = { text => onChangePrice(text) }
          value = { price }
          keyboardType = "decimal-pad"
          placeholder = "R$"
        />

        <TouchableOpacity
          style = { styles.btnRemove }
        >
          <Icon
            style = { styles.iconRemove }
            name = 'close'
            size = {26}
            color = '#d16060'
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <LinearGradient
      style = { styles.linearGradient }
      colors = {[ '#59a4ff', '#59e9ff' ]}
      start = {{ x: 0, y: 0}}
      end = {{ x: 1, y: 1 }}
    >
    <View style={ styles.viewStyle }>
      <View style={ styles.header }>
        <View style={ styles.headerPt2 }>
          <TouchableOpacity
            style = { styles.btnBack }
            onPress = { () => navigation.goBack() }
          >
            <Icon
              name = 'arrowleft'
              size = {20}
              color = '#fff'
            />
          </TouchableOpacity>

          <TextInput 
            style = { styles.listName }
            onChangeText = { text => onChangeItem(text) }
            placeholder = "Digite o nome da lista"
            value = { data[listId].name }
          />
        </View>

        <TouchableOpacity
          style = { styles.btnSaveList }
          onPress = { () => console.log(list) }
        >
          <Text style={ styles.txtBtnSaveList }>Salvar lista</Text>
        </TouchableOpacity>
      </View>      
      
      <View style={ styles.viewList }>
        <View style={ styles.headerList }>
        <Text style={ styles.txtItem }>Item</Text>
        <Text style={ styles.txtAmount }>Qtd.</Text>
        <Text style={ styles.txtPrice }>Valor</Text>
        </View>

        <SafeAreaView
          style = { styles.flatList }
        >
          <FlatList
            data = { data[listId].items }
            renderItem = { ({ item }) => <RenderItem item={item.itemName} amount={item.amount} price={item.price} /> }
            showsVerticalScrollIndicator={ false }
            keyExtractor = { (item, index) => index.toString() }
          />
        </SafeAreaView>
      </View>

      <TouchableOpacity
        style = { styles.btnCalcTotal }
        onPress = { () => newItem() }
      >
        <Text style={ styles.txtBtn }>Calcular total</Text>
      </TouchableOpacity>

      <View style={ styles.vwInputItem }>
        <TextInput
          style = { styles.txtInputItem }
          placeholder = 'Adicionar item'
          placeholderTextColor = '#aaa'
          value = { newItem }
          onChangeText = { (text) => onChangeNewItem(text) }
        />

        <TouchableOpacity
          style = { styles.btnAddItem }
          onPress = { handleAdd }
        >
          <Icon 
            name = 'plus'
            size = {25}
            color = '#fff'
          />
        </TouchableOpacity>
      </View>
    </View>
    </LinearGradient>
  );
}

export default ShoppingList;