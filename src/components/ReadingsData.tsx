// components/ReadingsData.tsx

import { Box, Heading, Text, List, ListItem, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

interface Reading {
  header: string;
  reference: string;
  formattedText: string;
}

const ReadingsData = () => {
  const [readings, setReadings] = useState<Reading[]>([]);

  useEffect(() => {
    const fetchReadings = async () => {
      try {
        const response = await fetch('api/dailyReadings');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setReadings(data.readings.readings); // Corrected access to readings array
      } catch (error) {
        console.error('Error fetching readings:', error);
      }
    };

    fetchReadings();
  }, []);

  return (
    <Center>
      <Box p={1}>
        {Array.isArray(readings) && readings.length > 0 ? (
          <Box textAlign="center">
            <List mt={4}>
              {readings.map((reading, index) => (
                <ListItem key={index} mb={4}>
                  <Heading as="h3" size="md">
                    {reading.header}
                  </Heading>
                  <Text>Reference: {reading.reference}</Text>
                  <Text>{reading.formattedText}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          <Text>No readings available.</Text>
        )}
      </Box>
    </Center>
  );
};

export default ReadingsData;
