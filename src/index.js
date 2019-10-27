import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import styles from './assets/styles';

import Routes from './routes';

const App = () => (
  <ThemeProvider theme={styles}>
    <StatusBar barStyle="dark-content" />
    <Routes />
  </ThemeProvider>
);

export default App;
