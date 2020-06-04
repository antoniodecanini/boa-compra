import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity} from 'react-native';

import Styles from './styles';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={ Styles.viewStyle }>
      <View style={ Styles.header }>
        <Text style={ Styles.txtList }>Lista</Text>
        <Text style={ Styles.txtCreatedAt }>Criada em</Text>
      </View>

      <View style={ Styles.viewLists }>
        <TouchableOpacity
          style = { Styles.btnList }
        >
          <Text style={ Styles.txtBtnList }>Açai Atacadista</Text>
          <Text style={ Styles.txtBtnCreatedAt }>25/08/2019</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style = { Styles.btnList }
        >
          <Text style={ Styles.txtBtnList }>Açai Atacadista</Text>
          <Text style={ Styles.txtBtnCreatedAt }>25/08/2019</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style = { Styles.btnNewList }
        onPress = { () => navigation.navigate('ShoppingList') }
      >
        <Text style={ Styles.txtBtn }>Nova Lista</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;