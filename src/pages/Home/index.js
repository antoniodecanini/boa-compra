import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import data from '../../assets/data.json';
import getRealm from '../../services/realm';

function HomeScreen() {
  const navigation = useNavigation();

  function deleteList(id) {
    console.log(`Pressionei o id ${id}`)
  }

  // async function saveList(list) {
  //   const data = {
  //     id: list.id,
  //     name: list.name,
  //     created_at: list.created_at,
  //     items: list.items
  //   }

  //   const realm = await getRealm();

  //   realm.write(() => {
  //     realm.create('Lists', data)
  //   });
  // }

  // async function addBD() {
  //   try {
  //     await saveList(data)
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }

  function RenderList({ id, name, createdAt }) {
    return (
      <TouchableOpacity
        style = { styles.btnList }
        onPress = { () => navigation.navigate('ShoppingList', { id }) }
        onLongPress = { () => deleteList(id) }
      >
        <Text style={ styles.txtBtnList }>{ name }</Text>
        <Text style={ styles.txtBtnCreatedAt }>{ createdAt }</Text>
      </TouchableOpacity>
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
        <Text style={ styles.txtList }>Lista</Text>
        <Text style={ styles.txtCreatedAt }>Criada em</Text>
      </View>

      <View style={ styles.viewLists }>
        <FlatList
          style = { styles.flatList }
          data = { data }
          renderItem = { ({ item }) => <RenderList 
            id = { item.id }
            name = { item.name }
            createdAt = { item.createdAt }
          /> }
          // keyExtractor = { data => String(data.id) }
        />
      </View>

      <TouchableOpacity
        style = { styles.btnNewList }
        onPress = { () => navigation.navigate('ShoppingList') }
      >
        <Text style={ styles.txtBtn }>Nova Lista</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}

export default HomeScreen;