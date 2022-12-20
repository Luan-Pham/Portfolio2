import * as React from 'react';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import Header from './components/Header';
// import Project from './components/Project';
import Projects from './components/Projects';

function App() {
  return (
    <ChakraProvider>
      <VStack p={8}>
        <Header />
        <Projects />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
