import React, { useEffect } from "react";
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

import Hero from "../components/Hero";
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
          <AspectRatio ml={10}maxW="85%" ratio={16 / 9}>
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
          <ChecklistIndex />
        </Container>
      </Box>
    </>
  );
};

export async function getServerSideProps() {
  try {
    // Fetch data from the API endpoint using the environment variable
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL || "");
    const liturgyData = await res.json();

    // console.log("Fetched liturgyData:", liturgyData); // Log fetched data

    return {
      props: {
        liturgyData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        liturgyData: null,
      },
    };
  }
}


export default HomePage;
