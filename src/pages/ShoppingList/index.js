import React, { Component } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput, FlatList, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import data from '../../assets/data.json';

function ShoppingList() {
  const navigation = useNavigation();
  const route = useRoute();

  const [item, onChangeItem] = React.useState('');
  const [amount, onChangeQtd] = React.useState('');
  const [price, onChangePrice] = React.useState('');

  const listId = route.params.id;

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

  function newItem() {
    
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
          style = { styles.btnNewItem }
          onPress = { () => newItem() }
        >
          <Text style={ styles.txtBtnNewItem }>Novo item</Text>
        </TouchableOpacity>
      </View>      
      
      <View style={ styles.viewList }>
        <View style={ styles.headerList }>
        <Text style={ styles.txtItem }>Item</Text>
        <Text style={ styles.txtAmount }>Qtd.</Text>
        <Text style={ styles.txtPrice }>Valor</Text>
        </View>

        <ScrollView
          style = { styles.flatList }
          showsVerticalScrollIndicator={ false }
        >
          <FlatList
            data = { data[listId].items }
            renderItem = { ({ item }) => <RenderItem item={item.itemName} amount={item.amount} price={item.price} /> }
            // keyExtractor = { data => String(data[listId].items.id) }
          />
        </ScrollView>
      </View>

      <TouchableOpacity
        style = { styles.btnSaveList }
        onPress = { () => newItem() }
      >
        <Text style={ styles.txtBtn }>Salvar lista</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = { styles.btnCalcTotal }
        onPress = { () => newItem() }
      >
        <Text style={ styles.txtBtn }>Calcular total</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}

export default ShoppingList;