// components/ReadingsData.tsx
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Center,
  Container,
  Link,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";

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
interface ReadingsDataProps {
  selectedDate?: Date;
}

const ReadingsData: React.FC<ReadingsDataProps> = ({ selectedDate }) => {
  const [readings, setReadings] = useState<Reading[] | null>(null);
  const currentDate = selectedDate || new Date();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();

        const response = await fetch(
          `/api/dailyReadingsEng?date=${year}-${month}-${day}`
        );
        const result: ApiResponse = await response.json();
        setReadings(result.readings.readings);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, [currentDate]);

  return (
    <Container maxW="container.lg" minH="300px">
        {readings !== null && readings.length > 0 ? (
          <Box textAlign="start">
            <Heading as="h2" size="lg" my={4}>
              Readings
            </Heading>
            <VStack align="left">
              <Link href="https://bible.usccb.org/" isExternal>
                USCCB <ExternalLinkIcon mx="2px" />
              </Link>
              <Link href="https://thanhlinh.net/lich-loi-chua/" isExternal>
                ThanhLinh.net <ExternalLinkIcon mx="2px" />
              </Link>
            </VStack>
            <List mt={4}>
              {readings.map((reading, index) => (
                <ListItem key={index} mb={4}>
                  <Heading as="h3" size="md" mb={1}>
                    {reading.header}
                  </Heading>
                  <Heading as="h4" size="sm" mb={1}>
                    {reading.reference}
                  </Heading>
                  <Text style={{ whiteSpace: "pre-line" }}>
                    {reading.formattedText}
                  </Text>
                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          <Box textAlign={"left"}>
            <Heading as="h2" size="lg" my={4}>
              Readings
            </Heading>
            <VStack align="left">
              <Text>No readings available.</Text>
              <Link href="https://bible.usccb.org/" isExternal>
                USCCB <ExternalLinkIcon mx="2px" />
              </Link>
              <Link href="https://thanhlinh.net/lich-loi-chua/" isExternal>
                ThanhLinh.net <ExternalLinkIcon mx="2px" />
              </Link>
            </VStack>
          </Box>
        )}
    
    </Container>
  );
};

export default ReadingsData;
