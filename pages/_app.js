import { CookiesContext } from 'contexts/cookiesContext';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import cookie from 'react-cookies';
import React from 'react';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const App = ({ Component, pageProps }) => {
  console.log('pageProps', pageProps);
  const cookies = cookie.loadAll();

  return (
    <CookiesContext.Provider value={cookies}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CookiesContext.Provider>
  );
};

export default App;
