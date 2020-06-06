import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';

import styles from './styles';
import data from '../../assets/data.json';

function ShoppingList() {
  const [item, onChangeItem] = React.useState('');
  const [amount, onChangeQtd] = React.useState('');
  const [price, onChangePrice] = React.useState('');

  function RenderItem({ item, amount, price }) {
    return (
      <View style={styles.vwItemList}>
        <TextInput
          style = {[ styles.input, styles.itemField ]}
          onChangeText = { text => onChangeItem(text) }
          value = { item }
          // placeholder = "Item"
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
          <Text style={ styles.txtRemove }>X</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function newItem() {
    data[0].items.push({ "itemName": "teste", "amount": "5", "price": "55.62" })
    console.log(data[0].items)
  }

  return (
    <View style={ styles.viewStyle }>
      <Text style={styles.txtCreatedAt}>Lista criada em: </Text>
      
      <View style={ styles.viewList }>
        <FlatList
          style = { styles.flatList }
          data = { data[1].items }
          renderItem = { ({ item }) => <RenderItem item={item.itemName} amount={item.amount} price={item.price} /> }
        />
      </View>

      <TouchableOpacity
        style = { styles.btnNewItem }
        onPress = { () => newItem() }
      >
        <Text style={ styles.txtBtn }>Novo item</Text>
      </TouchableOpacity>
      
      <Text style={ styles.txtTotal }>
        Total da compra: {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(54)}
      </Text>
    </View>
  );
}

export default ShoppingList;