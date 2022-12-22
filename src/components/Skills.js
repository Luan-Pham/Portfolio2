import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaNodeJs, FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiJquery, SiMongodb, SiMysql, SiChakraui } from 'react-icons/si';

function Skills() {
  return (
    <List spacing={3}>
      <ListItem>
        <ListIcon as={MdCheckCircle} color='green.500' />
        Node.js
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color='green.500' />
        React
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color='green.500' />
        HTML
      </ListItem>
      {/* You can also use custom icons from react-icons */}
      <ListItem>
        <ListIcon as={MdSettings} color='green.500' />
        CSS
      </ListItem>
      <ListItem>
        <ListIcon as={MdSettings} color='green.500' />
        jQuery
      </ListItem>
      <ListItem>
        <ListIcon as={MdSettings} color='green.500' />
        MongoDb
      </ListItem>
      <ListItem>
        <ListIcon as={MdSettings} color='green.500' />
        MySQL
      </ListItem>
      <ListItem>
        <ListIcon as={MdSettings} color='green.500' />
        Chakra UI
      </ListItem>
    </List>
  );
}

export default Skills;
