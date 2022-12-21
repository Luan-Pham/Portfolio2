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
import { ExternalLinkIcon } from '@chakra-ui/icons';

function Projects() {
  return (
    <Card w='100%'>
      <CardHeader>
        <Heading size='md'>Client Report</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              <Link
                href='https://secure-everglades-09731.herokuapp.com/'
                isExternal
              >
                Barcade <ExternalLinkIcon mx='2px' />
              </Link>
            </Heading>
            <Text pt='2' fontSize='sm'>
              View a summary of all your clients over the last month.
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              <Link
                href='https://luan-pham.github.io/Password-Generator/'
                isExternal
              >
                Password Generator! <ExternalLinkIcon mx='2px' />
              </Link>
            </Heading>
            <Text pt='2' fontSize='sm'>
              Check out the overview of your clients.
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              <Link
                href='https://luan-pham.github.io/Marvel-Project/'
                isExternal
              >
                Marvel Search! <ExternalLinkIcon mx='2px' />
              </Link>
            </Heading>
            <Text pt='2' fontSize='sm'>
              See a detailed analysis of all your business clients.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Projects;
