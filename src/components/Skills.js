import { List, ListItem, ListIcon, VStack, Flex, Box, Heading } from '@chakra-ui/react';
import { FaNodeJs, FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiJquery, SiMongodb, SiMysql, SiChakraui } from 'react-icons/si';
import Header from './Header';

function Skills() {

  let skills = [{}]
  return (
    <Box w='100%'>
      <Heading textAlign='center'> Skills</Heading>
    <Flex w="100%" justifyContent={'space-evenly'}>
    <List spacing={3}>
      <ListItem>
        <ListIcon as={FaNodeJs} color='green.500' />
        Node.js
      </ListItem>
      <ListItem>
        <ListIcon as={FaReact} color='green.500' />
        React
      </ListItem>
      <ListItem>
        <ListIcon as={FaHtml5} color='green.500' />
        HTML
      </ListItem>
      <ListItem>
        <ListIcon as={FaCss3} color='green.500' />
        CSS
      </ListItem>
      <br></br>
      </List>
      <List spacing={3}>
      <ListItem>
        <ListIcon as={SiJquery} color='green.500' />
        jQuery
      </ListItem>
      <ListItem>
        <ListIcon as={SiMongodb} color='green.500' />
        MongoDb
      </ListItem>
      <ListItem>
        <ListIcon as={SiMysql} color='green.500' />
        MySQL
      </ListItem>
      <ListItem>
        <ListIcon as={SiChakraui} color='green.500' />
        Chakra UI
      </ListItem>
    </List>
    </Flex>
    </Box>
  );
}

export default Skills;
