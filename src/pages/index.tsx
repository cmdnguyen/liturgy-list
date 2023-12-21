// localhost:3000
import Hero from "../components/Hero";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  AspectRatio,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import MassChecklist from "../components/checklists/massChecklist";
import AdorationChecklist from "@/components/checklists/adorationChecklist";

function HomePage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("mass");

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

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
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
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              <Select
                placeholder="Select option"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="mass">Mass</option>
                <option value="adoration">Adoration</option>
              </Select>
              {selectedOption === "mass" && <MassChecklist />}
              {selectedOption === "adoration" && <AdorationChecklist />}
            </Flex>
          </Container>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
