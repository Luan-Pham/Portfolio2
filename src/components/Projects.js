import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
  Link,
} from '@chakra-ui/react';

function Projects() {
  return (
    <Card w="100%">
      <CardHeader>
        <Heading size="md">Projects</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              <Link
                href="https://secure-everglades-09731.herokuapp.com/"
                isExternal
              >
                Barcade
              </Link>
            </Heading>
            <Text pt="2" fontSize="sm">
              Group Project collborating with other students in bootcamp. A
              virtual bar and arcade platform used to socialize with friends,
              play games, and set high scores!
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              <Link
                href="https://luan-pham.github.io/Marvel-Project/"
                isExternal
              >
                Marvel Search
              </Link>
            </Heading>
            <Text pt="2" fontSize="sm">
              Collaborative project to use the marvel API in order to search for
              information about its expansive universe. Users can search for
              data about a character's backstory, comic books, and movies.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              <Link
                href="https://luan-pham.github.io/Password-Generator/"
                isExternal
              >
                Thyme2Cook
              </Link>
            </Heading>
            <Text pt="2" fontSize="sm">
              Latest application that I am working on! Ap app to help you decide
              to what to make for dinner using the spoonacular API.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Projects;
