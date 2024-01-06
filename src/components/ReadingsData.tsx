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
  VStack
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { formatShortDate } from "@/utils/dateFormat";

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
  const formattedDate = formatShortDate(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dailyReadingsEng");
        const result: ApiResponse = await response.json();
        setReadings(result.readings.readings);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxW="container.lg">
      <Center>
        {readings !== null && readings.length > 0 ? (
          <Box textAlign="center">

            <Heading as="h2" size="lg" my={4}>
              Readings for {formattedDate}{" "}
            </Heading>
            <VStack>
            <Link href="https://bible.usccb.org/" isExternal>
              Readings from USCCB <ExternalLinkIcon mx="2px" />
            </Link>
            <Link href="https://thanhlinh.net/lich-loi-chua/" isExternal>
              Readings from ThanhLinh <ExternalLinkIcon mx="2px" />
            </Link>
            </VStack>
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
