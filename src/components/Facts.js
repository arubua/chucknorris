import React, { useState, useEffect } from 'react';
import { Box, HStack, Image, Text, VStack, Link } from '@chakra-ui/react';
import axios from 'axios';
import { ExternalLinkIcon, RepeatIcon } from '@chakra-ui/icons';

const Facts = props => {
  const [fact, setFact] = useState(null);
  console.log(fact);

  const fetchFact = async category => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const result = await axios(url);
    setFact(result.data);
  };

  useEffect(() => {
    if (props.category !== null) {
      fetchFact(props.category);
    }
  }, [props.category]);

  const handleClick = e => {
    e.preventDefault();
    fetchFact(props.category);
  };

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      rounded="lg"
      mx=".5em !important"
      minW="300px"
      p={['.5em', '1em', '1em', '1em']}
    >
      {fact == null ? (
        <Box>
          <Text color="gray.600">
            Facts will appear here.Select a category to get started.
          </Text>
        </Box>
      ) : (
        <VStack>
          <HStack spacing="4">
            <Image w="50px" h="50px" src={fact.icon_url} />

            <Text
              fontSize={['sm', 'md', 'lg', 'lg']}
              //color="gray.600"
              //bgColor="orange.100"
              rounded="lg"
              p=".2em"
              minH="2.2em"
              maxW="1000px"
            >
              {fact.value}
            </Text>

            <RepeatIcon
              cursor="pointer"
              color="orange.400"
              onClick={handleClick}
              my=".2em"
            />
            <Link href={`${fact.url}`} isExternal>
              <ExternalLinkIcon my=".4em" color="orange.400" />
            </Link>
          </HStack>
        </VStack>
      )}
    </Box>
  );
};

export default Facts;
