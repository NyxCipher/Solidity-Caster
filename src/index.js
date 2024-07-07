// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Press Start 2P, sans-serif',
        backgroundColor: '#000',
        color: '#FFF',
      },
    },
  },
  fonts: {
    heading: `'Press Start 2P', sans-serif`,
    body: `'Press Start 2P', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '0',
        _hover: {
          transform: 'scale(1.05)',
        },
      },
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
