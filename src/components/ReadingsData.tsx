// components/ReadingsData.tsx
import { Box, Heading, Text, List, ListItem, Center, Container } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

interface Reading {
  header: string;
  reference: string;
  formattedText: string;
}

interface ApiResponse {
  readings: {
    readings: Reading[];
  };
}

const ReadingsData = () => {
  const [readings, setReadings] = useState<Reading[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dailyReadingsEng');
        const result: ApiResponse = await response.json();
        setReadings(result.readings.readings); // Update based on your API response structure
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxW="container.lg">
    <Center>
        {readings !== null && readings.length > 0 ? (
          <Box textAlign="center">
            <Heading as="h2" size="lg" mt={10} mb={4}>Readings for Today </Heading>
            <List mt={4}>
              {readings.map((reading, index) => (
                <ListItem key={index} mb={4}>
                  <Heading as="h3" size="md">
                    {reading.header}
                  </Heading>
                  <Text>{reading.reference}</Text>
                  <Text>{reading.formattedText}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          <Text>No readings available.</Text>
        )}
    </Center>
    </Container>
  );
};

export default ReadingsData;
