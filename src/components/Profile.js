import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import Grad from '../components/assets/Grad.jpg';

function Profile() {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="filled"
      w="80%"
      borderRadius="2rem"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '250px' }}
        src={Grad}
        alt="Profile Picture"
      />

      <Stack>
        <CardBody>
          <Heading size="lg">About Me</Heading>

          <Text py="5" fontSize="xl">
            My name is Luan Pham and I am an aspiring web developer. I graduated
            from UC Davis in 2016 with a degree in Exercise Biology. Afterwards,
            I studied physical therapy and have been working in the field ever
            since. I have always been interested in programming and want to
            change to a career that will help my professional and personal
            growth. I decided to attend the UC Berkeley Coding Camp which helped
            me learn valuable web development skills. I used these skills to
            create the applications in my projects section below.
          </Text>
        </CardBody>

        <CardFooter>
          <a href="https://resume.io/r/x4wKMkaU8">
            <Button variant="solid" colorScheme="blue">
              Hire Me
            </Button>
          </a>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default Profile;
