// pages/massPrayers.tsx
import React, { useState } from "react";
import Hero from "../components/Hero";
import MassImage from "../../public/mass_cap12021.jpg";
import { Container, Heading, Switch, Flex, Text } from "@chakra-ui/react";
import EnglishPrayers from "../components/prayers/EnglishPrayers";
import VietnamesePrayers from "../components/prayers/VietnamesePrayers";

export default function MassPrayers() {
  const [isVietnamese, setIsVietnamese] = useState(false);

  const handleToggleLanguage = () => {
    setIsVietnamese((prev) => !prev);
  };

  const heroText = "Prayers used during Mass";

  return (
    <>
      <Hero heroText={heroText} backgroundImageSrc={MassImage} />
      <Container maxW="full">
        <Container maxW="2xl" my={4}>
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="lg" my={2}>
              Mass Prayers
            </Heading>
            <Flex align="center">
              <Text mr={2}>{isVietnamese ? "Tiếng Việt" : "English"}</Text>
              <Switch
                isChecked={isVietnamese}
                onChange={handleToggleLanguage}
              />
            </Flex>
          </Flex>

          {isVietnamese ? <VietnamesePrayers /> : <EnglishPrayers />}
        </Container>
      </Container>
    </>
  );
}
