import * as React from "react";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Profile from "./components/Profile";

function App() {
  return (
    <ChakraProvider>
      <VStack p={8} margin={3} spacing={10}>
        <Header />
        <Profile />
        <Projects />
        <Skills />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
