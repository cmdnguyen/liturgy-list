// src/components/LiturgyData.jsx

import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, List, ListItem } from '@chakra-ui/react';

interface LiturgyData {
  season: string;
  season_week: string;
  weekday: string;
  celebrations: Celebration[];
  date?: string; // Add the optional date property
}

interface Celebration {
  title: string;
  colour: string;
  rank: string;
  rank_num: number;
}

const LiturgyData = () => {
  const [data, setData] = useState<LiturgyData | null>(null); // Update the type of data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // Months are zero-indexed
        const day = currentDate.getDate();
  
        const response = await fetch(`/api/liturgyCalendar?year=${year}&month=${month}&day=${day}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data from calpi:', error as Error);
        // You might want to set an error state here if needed.
      }
    };
  
    fetchData();
  }, []);

  return (
    <Box p={4}>
      {data ? (
        <Box>
          {data.date && <Heading size="lg">Liturgy Data for {data.date}</Heading>}
          <Text>Season: {data.season}</Text>
          <Text>Season Week: {data.season_week}</Text>
          <Text>Weekday: {data.weekday}</Text>
          <List mt={4}>
            {data.celebrations.map((celebration, index) => (
              <ListItem key={index} mb={4}>
                <Heading size="md">Title: {celebration.title}</Heading>
                <Text>Colour: {celebration.colour}</Text>
                <Text>Rank: {celebration.rank}</Text>
                <Text>Rank Number: {celebration.rank_num}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
};

export default LiturgyData;
