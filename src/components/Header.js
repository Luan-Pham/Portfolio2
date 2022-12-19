import {
  Flex,
  Heading,
  Button,
  VStack,
  Spacer,
  IconButton,
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack>
      <Flex w='100%'>
        <Heading> Luan Pham</Heading>
        <Spacer />
        <Button onClick={toggleColorMode} position=''>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <IconButton icon={<FaGithub />}></IconButton>
        <IconButton icon={<FaLinkedin />}></IconButton>
      </Flex>
    </VStack>
  );
}

export default Header;
