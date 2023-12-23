// components/LiturgicalDataDisplay.tsx
import { Stack, Heading, Text } from "@chakra-ui/react";

interface LiturgicalDataDisplayProps {
  liturgicalData: any; // Adjust the type based on your actual data structure
}

const LiturgicalDataDisplay: React.FC<LiturgicalDataDisplayProps> = ({ liturgicalData }) => {
  return (
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
  );
};

export default LiturgicalDataDisplay;