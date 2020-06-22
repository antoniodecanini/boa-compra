import React, { useState, useEffect } from 'react';
import { useNavigation, } from '@react-navigation/native';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import getRealm from '../../services/realm';

function HomeScreen() {
  const navigation = useNavigation();

  const [lists, setLists] = useState([]);

  useEffect(() => {
    loadLists();
  }, []);

  async function loadLists() {
    const realm = await getRealm();

    const data = realm.objects('List').sorted('created_at', true);

    setLists(data);
  }

  async function handleDelete(id, name) {
    Alert.alert(
      'Deletar lista!',
      `Você deseja deletar ${name}?`,
      [
        { text: 'Não', onPress: () => {} },
        { text: "Sim", onPress: () => deleteList(id) },
      ],
      { cancelable: false }
    );
  }

  async function deleteList(id) {
    const realm = await getRealm();

    const deleteList = realm.objects('List').filtered(`id=${id}`)

    realm.write(() => {
      try {
        realm.delete(deleteList);
      } catch (err) {
        console.log(err);
      }
    });

    loadLists();
  }

  function RenderList({ id, name, createdAt }) {
    const day = createdAt.getDate();
    const month = `0${createdAt.getMonth() + 1}`;
    const year = createdAt.getFullYear();
    const date = `${day}/${month.slice(-2)}/${year}`;
    return (
        <TouchableOpacity
          style = { styles.btnList }
          onPress = { () => navigation.navigate('NewList', { id, isNew: false }) }
          onLongPress = { () => handleDelete(id, name) }
          >
          <Text style={ styles.txtBtnList }>{ name }</Text>
          <Text style={ styles.txtBtnCreatedAt }>{ date }</Text>
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
        <Text style={ styles.txtCreatedAt }>Editada em</Text>
      </View>

      <SafeAreaView style={ styles.viewLists }>
        <FlatList
          style = { styles.flatList }
          data = { lists }
          renderItem = { ({ item }) => <RenderList 
            id = { item.id }
            name = { item.title }
            createdAt = { item.created_at }
          /> }
          showsVerticalScrollIndicator={ false }
          keyExtractor = { (item) => item.id }
        />
      </SafeAreaView>

      <TouchableOpacity
        style = { styles.btnNewList }
        onPress = { () => navigation.navigate('NewList', {isNew: true}) }
      >
        <Text style={ styles.txtBtn }>Nova Lista</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}

export default HomeScreen;