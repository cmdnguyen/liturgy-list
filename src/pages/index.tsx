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
  useColorModeValue,
  AspectRatio,
} from "@chakra-ui/react";

import { ReactElement } from "react";

// interface CardProps {
//   heading: string
//   description: string
//   icon: ReactElement
//   href: string
// }

import MassChecklist from "../components/massChecklist";

function HomePage() {
  return (
    <>
      <Hero />

      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Welcome to the Liturgy Checklist!
          </Heading>
          <Text color={"gray.100"} fontSize={{ base: "sm", sm: "lg" }}>
            This is an interactive checklist for any HT in the Liturgy
            committee, or Ban Phụng Vụ, to use.
          </Text>
          <AspectRatio maxW="560px" ratio={16/9}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/57CrxPpe-Es?si=iZEnMAvVeta7s-2e"
              allowFullScreen
            />
          </AspectRatio>
        </Stack>

        <Container maxW={"7x1"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <MassChecklist />
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
