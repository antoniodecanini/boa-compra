import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';

import Styles from './styles';

function ShoppingList() {
  const [item, onChangeItem] = React.useState('');
  const [qtd, onChangeQtd] = React.useState('');
  const [price, onChangePrice] = React.useState('R$ ');

  const totalPrice = price.split('R$ ');

  function newItem() {
    
  }

  return (
    <View style={ Styles.viewStyle }>
      <Text style={Styles.txtCreatedAt}>Lista criada em: </Text>
      
      <View style={ Styles.viewList }>
        <TextInput
          style = {[ Styles.input, Styles.itemField ]}
          onChangeText = { text => onChangeItem(text) }
          value = { item }
          placeholder = "Item"
        />

        <TextInput
          style = {[ Styles.input, Styles.qtdField ]}
          onChangeText = { text => onChangeQtd(text) }
          value = { qtd }
          keyboardType = "decimal-pad"
          placeholder = "Qtd"
        />

        <TextInput
          style = {[ Styles.input, Styles.priceField ]}
          onChangeText = { text => onChangePrice(text) }
          value = { price }
          keyboardType = "decimal-pad"
        />
      </View>

      <TouchableOpacity
        style = { Styles.btnNewItem }
        onPress = { () => newItem() }
      >
        <Text style={ Styles.txtBtn }>Novo item</Text>
      </TouchableOpacity>
      
  <Text style={ Styles.txtTotal }>Total da compra: R$ {totalPrice}</Text>
    </View>
  );
}

export default ShoppingList;