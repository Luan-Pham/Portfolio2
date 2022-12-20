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
    // <VStack p={8}>
    <Flex w='100%'>
      <Heading> Luan Pham</Heading>
      <Spacer />
      <Button m={1} onClick={toggleColorMode} position=''>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <a href='https://github.com/Luan-Pham'>
        <Button m={1} rightIcon={<FaGithub />}>
          GitHub
        </Button>
      </a>
      <a href='https://www.linkedin.com/in/luan-pham3/'>
        <Button m={1} rightIcon={<FaLinkedin />}>
          Linkedin
        </Button>
      </a>
    </Flex>
    // </VStack>
  );
}

export default Header;
