import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput, FlatList, SafeAreaView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

function NewList() {
  const navigation = useNavigation();
  
  const [listName, onChangeListName] = React.useState('');
  const [list, onChangeList] = React.useState([]);
  const [newItem, onChangeNewItem] = React.useState('');
  const [item, onChangeItem] = React.useState('');
  const [amount, onChangeAmount] = React.useState('');
  const [price, onChangePrice] = React.useState('');

  function RenderList({item, amount, price, id}) {
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
          onChangeText = { text => onChangeAmount(text) }
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
          onPress = { () => handleDel(id) }
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

  let itemId;
  function handleAdd() {    
    if(newItem.trim()) {
      itemId = list.length + 1

      onChangeList([...list, {
        id: itemId,
        item: newItem,
        amount: amount,
        price: price
      }]);
    }
    onChangeNewItem('');
  }

  function handleDel(id) {
    onChangeList((prevList) => {
      return prevList.filter(list => list.id != id);
    });
  }

  function handleSave() {
    if(listName){
      console.log({
        listName: listName,
        items: list
      });
    } else {
      return Alert.alert(
        'Erro ao salvar!',
        'Favor preencher o nome da lista',
        [
          { text: "OK", onPress: () => {} }
        ],
        { cancelable: false }
      );
    }

    return Alert.alert(
      'Lista salva com sucesso',
      'A lista foi salva, você pode acessa-la na tela principal',
      [
        { text: "OK", onPress: () => navigation.goBack() }
      ],
      { cancelable: false }
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
            onChangeText = { text => onChangeListName(text) }
            value = { listName }
            placeholder = "Digite o nome da lista"
          />
        </View>

        <TouchableOpacity
          style = { styles.btnSaveList }
          onPress = { () => handleSave() }
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
            data = { list }
            renderItem = { ({ item }) => 
              <RenderList
                item={ item.item }
                amount={ item.amount } 
                price={ item.price }
                id = { item.id }
              />
            }
            showsVerticalScrollIndicator={ false }
            keyExtractor = { (item) => item.id }
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

export default NewList;