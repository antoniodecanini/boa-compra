import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput, FlatList, SafeAreaView, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import getRealm from '../../services/realm';

function NewList() {
  const navigation = useNavigation();
  const route = useRoute();

  const isNew = route.params.isNew;
  
  const [listName, onChangeListName] = React.useState('');
  const [list, onChangeList] = React.useState([]);
  const [newItem, onChangeNewItem] = React.useState('');
  const [newAmount, onChangeNewAmount] = React.useState('');
  const [item, onChangeItem] = React.useState('');
  const [amount, onChangeAmount] = React.useState('');
  const [price, onChangePrice] = React.useState('');

  useEffect(() => {
    isNewList(isNew);
  }, [])

  function isNewList(isNew) {
    if (!isNew) {
      const listId = route.params.id;
      loadItems(listId);
    }
  }

  async function loadItems(listId) {
    const realm = await getRealm();
  
    const selectedList = realm.objects('List').filtered(`id = ${listId}`)
    
    const listName = selectedList[0].title;
    onChangeListName(listName);

    const items = selectedList[0].items;
    onChangeList(items);
  }

  function RenderList({ item, amount, price, id }) {
    return (
      <View style={styles.vwItemList}>
        <TextInput
          style = {[ styles.input, styles.itemField ]}
          onChangeText = { text => handleUpdateItem(text, id) }
          value = { item }
          placeholder = "Item"
        />

        <TextInput
          style = {[ styles.input, styles.qtdField ]}
          onChangeText = { text => handleUpdateAmount(text, id) }
          value = { amount }
          keyboardType = "decimal-pad"
          placeholder = "Qtd"
        />

        <TextInput
          style = {[ styles.input, styles.priceField ]}
          onChangeText = { text => handleUpdatePrice(text, id) }
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

      if(newAmount == '') {
        return Alert.alert(
          'Quantidade não informada',
          'Favor informar a quantidade',
          [
            { text: "OK", onPress: () => {} }
          ],
          { cancelable: false }
        );
      }

      const floatAmount = parseFloat(newAmount);

      onChangeList([...list, {
        id: itemId,
        name: newItem,
        amount: floatAmount,
        price: 0
      }]);
    }
    onChangeNewItem('');
    onChangeNewAmount('');
  }

  function handleUpdateItem(text, id) {
    onChangeItem(text)
    const itemPosition = id - 1;

    list[itemPosition].name = item;
  }

  function handleUpdateAmount(text, id) {
    onChangeAmount(text)
    const itemPosition = id - 1;

    list[itemPosition].amount = parseFloat(amount);
  }

  function handleUpdatePrice (text, id) {
    onChangePrice(text)
    const itemPosition = id - 1;

    list[itemPosition].price = parseFloat(price);
  }

  function handleDel(id) {
    onChangeList((prevList) => {
      return prevList.filter(list => list.id != id);
    });
  }

  async function handleSave() {
    if(listName) {
      const newList = {
        id: await generateListId(),
        title: listName,
        created_at: new Date(),
        items: list
      }
      if(isNew) {
        await saveNewList(newList);
      } else {
        const updatedList = {
          id: route.params.id,
          title: listName,
          created_at: new Date(),
          items: list
        }
        await updateList(updatedList);
      }
    
      return Alert.alert(
        'Lista salva com sucesso',
        'A lista foi salva, você pode acessa-la na tela principal',
        [
          { text: "OK", onPress: () => navigation.navigate('Home', {reload: true}) }
        ],
        { cancelable: false }
      );
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
  }

  async function saveNewList(newList) {
    const realm = await getRealm();

    realm.write(() => {
      realm.create('List', newList);
    });
  }

  async function updateList(updatedList) {
    const realm = await getRealm();

    realm.write(() => {
      realm.create('List', updatedList, 'modified');
    });
  }

  async function generateListId() {
    const realm = await getRealm();

    const dbLists = realm.objects('List').sorted('id', false);
    const amtLists = dbLists.length;
    if(amtLists == 0) {
      const id = 1;
      return id;
    }
    const lastId = dbLists[amtLists - 1].id
    const id = lastId + 1;
    return id;
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
            placeholderTextColor = '#ddd'
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
        <Text style={ styles.txtAmount }>Qtd</Text>
        <Text style={ styles.txtPrice }>Valor</Text>
        </View>

        <SafeAreaView
          style = { styles.flatList }
        >
          <FlatList
            data = { list }
            renderItem = { ({ item }) => 
              <RenderList
                item={ item.name }
                amount={ item.amount.toString() } 
                price={ item.price.toString() }
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
        onPress = { () => migrate() }
      >
        <Text style={ styles.txtBtn }>Calcular total</Text>
      </TouchableOpacity>

      <View style={ styles.vwInputItem }>
        <TextInput
          style = { styles.txtInputItem }
          placeholder = 'Adicionar item'
          placeholderTextColor = '#999'
          value = { newItem }
          onChangeText = { (text) => onChangeNewItem(text) }
        />

        <TextInput
          style = { styles.txtInputQtd }
          placeholder = 'Qtd'
          placeholderTextColor = '#999'
          keyboardType = "decimal-pad"
          value = { newAmount }
          onChangeText = { (text) => onChangeNewAmount(text) }
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