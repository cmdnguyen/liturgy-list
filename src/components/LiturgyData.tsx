// src/components/LiturgyData.tsx

import React, { useEffect, useState } from "react";
import { Box, Heading, Text, List, ListItem, Center } from "@chakra-ui/react";
import Head from "next/head";

interface LiturgyData {
  celebrations: Celebration[];
}

interface Celebration {
  title: string;
  colour: string;
  rank: string;
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

        const response = await fetch(
          `/api/liturgyCalendar?year=${year}&month=${month}&day=${day}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data from calpi:", error as Error);
        // You might want to set an error state here if needed.
      }
    };

    fetchData();
  }, []);

  return (
    <Center>
      <Box p={1}>
        {data ? (
          <Box textAlign="center">
            <List>
                <Heading as="h3" size="md">Today's Celebration</Heading>
              {data.celebrations.map((celebration, index) => (
                <ListItem key={index} mb={4}>
                  <Heading as="h4" size="sm">{celebration.title}</Heading>
                  <Text>Color: {celebration.colour}</Text>
                  <Text>Rank: {celebration.rank}</Text>

                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          <Text>Loading...</Text>
        )}
      </Box>
    </Center>
  );
};

export default LiturgyData;
