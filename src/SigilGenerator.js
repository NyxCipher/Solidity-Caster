// src/SigilGenerator.js
import React, { useState } from 'react';
import { Box, Input, Button, VStack, Text } from '@chakra-ui/react';
import { shuffle } from 'lodash';

const removeVowelsAndDuplicates = (str) => {
  const vowels = 'aeiou';
  const chars = new Set();
  for (let char of str.toLowerCase()) {
    if (!vowels.includes(char) && !chars.has(char)) {
      chars.add(char);
    }
  }
  return Array.from(chars).join('').toUpperCase();
};

const shuffleString = (str) => {
  return shuffle(str.split('')).join('');
};

const addXs = (str) => {
  return str + 'X'.repeat(Math.floor(Math.random() * 3) + 1);
};

const generateSigil = (input) => {
  const noVowelsOrDuplicates = removeVowelsAndDuplicates(input);
  const shuffled = shuffleString(noVowelsOrDuplicates);
  return addXs(shuffled);
};

const SigilGenerator = () => {
  const [input, setInput] = useState('');
  const [sigil, setSigil] = useState('');

  const handleGenerate = () => {
    const newSigil = generateSigil(input);
    setSigil(newSigil);
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <VStack spacing={6}>
        <Input
          placeholder="Enter your Will and Desire"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="lg"
        />
        <Button onClick={handleGenerate} colorScheme="teal" size="lg">
          Generate Sigil
        </Button>
        {sigil && (
          <Text fontSize="2xl" fontWeight="bold">
            Your Sigil: {sigil}
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default SigilGenerator;
