// components/ReadingsData.tsx

import { Box, Heading, Text, List, ListItem, Center } from '@chakra-ui/react';
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
        const response = await fetch('/api/dailyReadings');
        const result: ApiResponse = await response.json();
        setReadings(result.readings.readings); // Update based on your API response structure
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Center>
      <Box p={1}>
        {readings !== null && readings.length > 0 ? (
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
