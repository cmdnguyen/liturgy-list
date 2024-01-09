import React from "react";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";

import Hero from "../components/Hero";
import ChecklistIndex from "../components/checklists/index";
import LiturgyData  from "../components/LiturgyData";
import DHTTAdoration from "../../public/chaVietMonstrance_dhtt2023.jpg"


function HomePage() {
  const heroText = (
    <>
      Thiếu Nhi Thánh Thể
      <br />
      Phụng Vụ Checklist
    </>
  );
  return (
    <>
      <Hero backgroundImageSrc={DHTTAdoration} heroText={heroText}/>
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
          <LiturgyData />
          <ChecklistIndex />
        </Container>
      </Box>
    </>
  );
};


export default HomePage;
