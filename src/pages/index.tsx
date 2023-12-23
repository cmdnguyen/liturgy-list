// pages/index.tsx
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

import { useEffect } from "react";
import ChecklistIndex from "../components/checklists/index";
import { useLiturgyData } from "../utils/hooks/useLiturgyData";

function HomePage() {
  const { liturgyData, liturgicalSeason, getColorScheme } = useLiturgyData();

  useEffect(() => {
    console.log("Component has mounted");
    // Fetch liturgical data on component mount
    // (Optional: You can still have this here for additional setup)
  }, []);

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
            {formatDate(new Date())}
          </Heading>
          {/* Display liturgical data in your component */}
          {liturgyData && (
            <Stack spacing={4} textAlign="center">
              {liturgyData.celebrations.map((celebration: any, index: number) => (
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
