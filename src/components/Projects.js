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
} from "@chakra-ui/react";

function Projects() {
  return (
    <Card w="100%">
      <CardHeader>
        <Heading size="md">Client Report</Heading>
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
                href="https://luan-pham.github.io/Password-Generator/"
                isExternal
              >
<<<<<<< HEAD
                Password Generator <ExternalLinkIcon mx='2px' />
=======
                Password Generator!
>>>>>>> b0b3239b28428435de6396bc51131ed845d655db
              </Link>
            </Heading>
            <Text pt="2" fontSize="sm">
              My first application! Generate a random and secure password to
              make your accounts more secured online.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              <Link
                href="https://luan-pham.github.io/Marvel-Project/"
                isExternal
              >
<<<<<<< HEAD
                Marvel Search <ExternalLinkIcon mx='2px' />
=======
                Marvel Search!
>>>>>>> b0b3239b28428435de6396bc51131ed845d655db
              </Link>
            </Heading>
            <Text pt="2" fontSize="sm">
              Collaborative project to use the marvel API in order to search for
              information about its expansive universe. Users can search for
              data about a character's backstory, comic books, and movies.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Projects;
