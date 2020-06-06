import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import data from '../../assets/data.json';

function HomeScreen() {
  const navigation = useNavigation();

  function RenderList({ name, createdAt }) {
    return (
      <TouchableOpacity
        style = { styles.btnList }
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
          renderItem = { ({ item }) => <RenderList name = { item.name } createdAt = { item.createdAt } /> }
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