import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

function App() {
  return (
    <>
      <StatusBar 
        backgroundColor = "transparent"
        translucent
        barStyle = "light-content"
     />
      <Routes />
    </>
  );
}

export default App;