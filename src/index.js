import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './assets/theme';

import Routes from './routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <StatusBar
      barStyle="light-content"
      backgroundColor={theme.colors.darkBlue}
    />
    <Routes />
  </ThemeProvider>
);

export default App;
