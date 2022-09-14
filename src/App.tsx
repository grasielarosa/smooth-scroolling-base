import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { MainsScreen } from './screens/MainScreen';
import { defaultTheme, GlobalStyle } from './styles';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MainsScreen />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
