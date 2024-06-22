// pages/massPrayers.tsx
import React, { useState } from "react";
import Hero from "../components/Hero";
import MassImage from "../../public/mass_cap12021.jpg";
import { Container, Heading, Switch, Flex, Text } from "@chakra-ui/react";
import MassPrayers from "../components/prayers/massPrayers";

export default function MassPrayersPage() {
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

          <MassPrayers isVietnamese={isVietnamese} />
        </Container>
      </Container>
    </>
  );
}

