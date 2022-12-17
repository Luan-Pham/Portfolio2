import { Flex, Heading, Button, VStack } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
// import { MdDarkMode, MdLightMode } from 'react-icons/md';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack>
      <Flex w='100%'>
        <Heading> Luan Pham</Heading>
      </Flex>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </VStack>
  );
}

export default Header;
