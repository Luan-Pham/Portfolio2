import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import Grad from '../components/assets/Grad.jpg'

function Profile() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w='80%'
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "250px" }}
        src={Grad}
        alt="Profile Picture"
      />

      <Stack>
        <CardBody>
          <Heading size="lg">About Me</Heading>

          <Text py="5" >
         My name is Luan Pham and I am an aspiring web developer. I
              graduated from UC Davis in 2016 with a degree in Exercise Biology.
              Afterwards, I studied physical therapy and have been working in
              the field ever since. I have always been interested in programming
              and want to change to a career that will help my professional and
              personal growth. I decided to attend the UC Berkeley Coding Camp
              which helped me learn valuable web development skills. I used these skills to create
              the applications in my projects section below. 
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Contact Me
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default Profile;
