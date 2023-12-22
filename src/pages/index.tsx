// localhost:3000
//pages/index.tsx
import Hero from "../components/Hero";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

import ChecklistIndex from "../components/checklists/index";
import axios from 'axios';
// import { litrugyCalendarAPI } from "../utils/liturgyCalendarAPI";

function HomePage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [liturgicalData, setLiturgicalData] = useState<any>(null);

  useEffect(() => {
    // Fetch liturgical data on component mount
    fetchLiturgicalData();
  }, []);

  const fetchLiturgicalData = async () => {
    try {
      // Example: Fetch liturgical data for today
      const response = await axios.get('http://localhost:3001/api/liturgy');
      // const data = await litrugyCalendarAPI(todayEndpoint);

      // Set the fetched data to state
      setLiturgicalData(response.data);

      // You can do additional processing with the data if needed
      // For example, extracting specific information and updating state
    } catch (error) {
      console.error("Error fetching liturgical data:", (error as any).message);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Hero />

      <Box
        p={4}
        bg={useColorModeValue("blackAlpha.50", "blackAlpha.300")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Stack
          spacing={4}
          as={Container}
          maxW={"6xl"}
          textAlign={"center"}
          m="auto"
        >
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Welcome to the Liturgy Checklist!
          </Heading>
          <Text fontSize={{ base: "sm", sm: "lg" }}>
            This is an interactive checklist for any HT in the Liturgy
            committee, or Ban Phụng Vụ, to use.
            <br />
            The checklist is based on the items you see in Mass and Adoration.
            Not all are needed.
            <br />
            Please check with your chaplain on what is needed for your mass in
            your chapter or league of chapters.
            <br />
            There is a button that describes the item and shows what it
            generally looks like.
          </Text>
          <AspectRatio ml={10} maxW="85%" ratio={16 / 9}>
            <iframe
              title="Liturgical Items"
              src="https://www.youtube.com/embed/57CrxPpe-Es?si=iZEnMAvVeta7s-2e"
              allowFullScreen
            />
          </AspectRatio>
        </Stack>

        <Container maxW={"8xl"} mt={12}>
          <Heading as="h2" size="lg" mb={4} textAlign={"center"}>
            {formatDate(currentDate)}
          </Heading>
        {/* Display liturgical data in your component */}
        {liturgicalData && (
            <Stack spacing={4} textAlign="center">
              {liturgicalData.celebrations.map((celebration: any, index: number) => (
                <div key={index}>
                  <Heading as="h3" size="md">
                    Celebration: {celebration.title}
                  </Heading>
                  <Text>
                    Color: {celebration.colour}, Liturgical Day Rank: {celebration.rank}
                  </Text>
                </div>
              ))}
            </Stack>
          )}
          <ChecklistIndex />
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
