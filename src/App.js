import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Heading,
  VStack,
  Link,
  Button,
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Categories from './components/Categories';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Box>
          <VStack>
            <ColorModeSwitcher mt=".5em" />
            <Heading
              mt=".5em"
              color="orange.400"
              fontWeight="bold"
              fontSize={['4xl', '4xl', '6xl', '6xl']}
            >
              CHUKNORRIS.IO
            </Heading>
            <Categories />
            <Box textAlign="center" mt="200px !important">
              <Link href="https://github.com/arubua/chucknorris" isExternal>
                <Button
                  colorScheme="orange"
                  fontSize="sm"
                  leftIcon={<AiFillGithub />}
                >
                  Open in Github
                </Button>
              </Link>
            </Box>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
