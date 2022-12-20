import { Center, Grid, GridItem, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Arcade from '../assets/Arcade.jpg';
import Bike from '../assets/Bike.jpg';
import Cap from '../assets/Cap-vs-Ironman.jpg';
import Notes from '../assets/Notes.jpg';
import Edit from '../assets/Text-Editor.jpg';
import Security from '../assets/Password.jpg';

function Project() {
  return (
    <Grid
      margin='50'
      padding='50'
      h='80vh'
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(6, 1fr)'
      gap={2}
      fontSize='5xl'
      color='white'
    >
      <GridItem
        rowSpan={3}
        colSpan={2}
        bg='#A3BAC3'
        position='relative'
        textAlign='center'
        bgImage={Arcade}
        bgPosition='center'
        bgSize='cover'
      >
        <Center width='100%' height='100%'>
          <Link
            href='https://secure-everglades-09731.herokuapp.com/'
            isExternal
          >
            Barcade <ExternalLinkIcon mx='2px' />
          </Link>
        </Center>
      </GridItem>
      <GridItem
        colSpan={2}
        bg='#006989'
        position='relative'
        textAlign='center'
        bgImage={Security}
        bgPosition='center'
        bgSize='cover'
      >
        <Center width='100%' height='100%'>
          <Link
            href='https://luan-pham.github.io/Password-Generator/'
            isExternal
          >
            Password Generator! <ExternalLinkIcon mx='2px' />
          </Link>
        </Center>
      </GridItem>
      <GridItem
        colSpan={2}
        bg='#006989'
        position='relative'
        textAlign='center'
        bgImage={Edit}
        bgPosition='center'
        bgSize='cover'
      >
        <Center width='100%' height='100%'>
          <Link href='https://intense-garden-34432.herokuapp.com/' isExternal>
            Text Editor! <ExternalLinkIcon mx='2px' />
          </Link>
        </Center>
      </GridItem>
      <GridItem
        colSpan={4}
        bg='#01A7C2'
        position='relative'
        textAlign='center'
        bgImage={Bike}
        bgPosition='center'
        bgSize='cover'
      >
        <Center width='100%' height='100%'>
          <Link href='https://possessed-web-11287.herokuapp.com/' isExternal>
            bikeRoute <ExternalLinkIcon mx='2px' />
          </Link>
        </Center>
      </GridItem>
      <GridItem
        colSpan={2}
        bg='#006989'
        position='relative'
        textAlign='center'
        bgImage={Notes}
        bgPosition='center'
        bgSize='cover'
      >
        <Center width='100%' height='100%'>
          <Link
            href='https://still-thicket-15786.herokuapp.com/notes'
            isExternal
          >
            Note Taker! <ExternalLinkIcon mx='2px' />
          </Link>
        </Center>
      </GridItem>
      <GridItem
        colSpan={2}
        bg='#006989'
        position='relative'
        textAlign='center'
        bgImage={Cap}
        bgPosition='center'
        bgSize='cover'
      >
        <Center width='100%' height='100%'>
          <Link href='https://luan-pham.github.io/Marvel-Project/' isExternal>
            Marvel Search! <ExternalLinkIcon mx='2px' />
          </Link>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default Project;
