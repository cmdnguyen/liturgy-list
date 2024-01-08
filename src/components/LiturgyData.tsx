// src/components/LiturgyData.tsx
import React, { useEffect, useState } from "react";
import { Box, Heading, Text, List, ListItem, Center } from "@chakra-ui/react";
import { formatFullDate } from "@/utils/dateFormat";

interface LiturgyDataProps {
  selectedDate?: Date;
}
interface LiturgyData {
  celebrations: Celebration[];
}

interface Celebration {
  title: string;
  colour: string;
  rank: string;
}

const LiturgyData: React.FC<LiturgyDataProps> = ({ selectedDate }) => {
  const [data, setData] = useState<LiturgyData | null>(null);
  const currentDate = selectedDate || new Date();
  const formattedDate = formatFullDate(currentDate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();

        const response = await fetch(
          `/api/liturgyCalendar?year=${year}&month=${month}&day=${day}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data from calpi:", error as Error);
      }
    };

    fetchData();
  }, [currentDate]);

  return (
    <Center>
      <Box p={1}>
        {data ? (
          <Box textAlign="center">
            <List mt={4}>
              <Heading as="h2" size="lg" mb={2}>
                Celebration for {formattedDate}:
              </Heading>
              {data.celebrations.map((celebration, index) => (
                <ListItem key={index} mb={4}>
                  <Heading as="h3" size="md">
                    {celebration.title}
                  </Heading>
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
