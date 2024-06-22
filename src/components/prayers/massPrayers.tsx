// components/prayers/MassPrayers.tsx
import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";
import massPrayers from "./data/massPrayersData";

interface MassPrayersProps {
  isVietnamese: boolean;
}

const MassPrayers: React.FC<MassPrayersProps> = ({ isVietnamese }) => {
  return (
    <>
      {massPrayers.map((prayer, index) => {
        const hasVietnamese = prayer.vietText && prayer.vietName;
        const hasEnglish = prayer.engText && prayer.engName;

        // Always render the prayer if it's Vietnamese or if English is selected and no English text is available
        if (isVietnamese || (!isVietnamese && !hasEnglish && hasVietnamese)) {
          return (
            <Box key={index} mb={4}>
              <Heading size="md" mb={2}>
                {prayer.vietName}
              </Heading>
              <Text dangerouslySetInnerHTML={{ __html: prayer.vietText }} />
            </Box>
          );
        } else if (!isVietnamese && hasEnglish) {
          return (
            <Box key={index} mb={4}>
              <Heading size="md" mb={2}>
                {prayer.engName}
              </Heading>
              <Text dangerouslySetInnerHTML={{ __html: prayer.engText }} />
            </Box>
          );
        } else {
          return null; // Don't render if neither language version is available
        }
      })}
    </>
  );
};

export default MassPrayers;
