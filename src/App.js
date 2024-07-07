// src/App.js
import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Stack, HStack} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, StackDivider } from '@chakra-ui/react';
import { Badge, Flex, Avatar } from '@chakra-ui/react';
import ronove from './assets/DarkPriestOvTheAbyss.gif';
import { Grid, GridItem } from '@chakra-ui/react';
import SigilGenerator from './SigilGenerator';


function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}

function App() {
  return (
    <div>
      <Box textAlign="center" py={10} px={6}>
        <VStack spacing={4}>
          <Heading as="h1" size="2xl">
            Caster: Order Ov Dantellion
          </Heading>
          <Text fontSize="xl">
            Order Your NFT Sigils Here...
          </Text>
          <Button colorScheme="teal" size="lg">
            Connect Wallet
          </Button>
          <SigilGenerator />
        </VStack>
      </Box>
      <Box textAlign="left" py={10} px={6}>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem w='100%' h='10'>
            <Flex>
              <Avatar src={ronove} />
              <Box ml='3'>
                <Text fontWeight='bold'>
                  Ronové
                  <Badge ml='1' colorScheme='green'>
                    Exhalted
                  </Badge>
                </Text>
                <Text fontSize='sm'>Summoner & Caster</Text>
              </Box>
            </Flex>
          </GridItem>
        <GridItem w='100%' h='10'>
        <Flex>
          <Avatar src={ronove} />
          <Box ml='3'>
            <Text fontWeight='bold'>
              MikeOfGaia
              <Badge ml='1' colorScheme='green'>
                Exhalted
              </Badge>
            </Text>
            <Text fontSize='sm'>Mage</Text>
          </Box>
        </Flex>
        </GridItem>
      </Grid>
      </Box>
    <Box textAlign="left" py={10} px={6}>
      <br />
      <Card>
        <CardHeader>
          <Heading size='md'>How It Works?</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Pick 'Will & Intention'
              </Heading>
              <Text pt='2' fontSize='sm'>
                Enter In Our Sigil Generator
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Select Mint
              </Heading>
              <Text pt='2' fontSize='sm'>
                Mint An Obfuscated Version of Your Desire
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Hodl Your NFT & Cast
              </Heading>
              <Text pt='2' fontSize='sm'>
                We Will Change & Enchant Your NFT For You! You Simple Need To Cast!
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  </div>
  );
}

export default App;
