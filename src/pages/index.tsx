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

import { useState } from "react";

import ChecklistIndex from "../components/checklists/index";

function HomePage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = (date: Date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
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
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Welcome to the Liturgy Checklist!
          </Heading>
          <Text fontSize={{ base: "sm", sm: "lg" }}>
            This is an interactive checklist for any HT in the Liturgy
            committee, or Ban Phụng Vụ, to use.
            <br />
            The checklist is based on the items you see in Mass and Adoration.
            Not all are needed. Please check with your chaplain on what is
            needed for your mass in your chapter or league of chapters.
            <br />
            There is a button that describes the item and shows what it
            generally looks like. <br />
            Please select the appropriate option below to get started.
          </Text>
          <AspectRatio maxW="560px" ratio={16 / 9}>
            <iframe
              title="Liturgical Items"
              src="https://www.youtube.com/embed/57CrxPpe-Es?si=iZEnMAvVeta7s-2e"
              allowFullScreen
            />
          </AspectRatio>
        </Stack>

        <Container maxW={"full"} mt={12}>
          <Container maxW={"7xl"}>
            <Heading as="h2" size="xl" mb={4}>
              {formatDate(currentDate)}
            </Heading>
            <ChecklistIndex />
          </Container>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
