import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
}

export default App;
