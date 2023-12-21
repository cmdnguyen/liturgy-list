import React, { useState } from "react";
import { Container, FormControl, SimpleGrid, Button } from "@chakra-ui/react";
import ChecklistGroup from "./index";

import { useLiturgyData } from "../../utils/liturgyColorHelper";

const AdorationChecklist: React.FC = () => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const { liturgyData, liturgicalSeason, getColorScheme } = useLiturgyData();

  const handleCheckboxChange = (values: string[]) => {
    setCheckedValues(values);
  };

  const handleClearChecks = () => {
    setCheckedValues([]);
  };

  return (
    <Container maxW={"full"}>
      <FormControl>
        {/* <FormLabel htmlFor="scarfOffering">Scarf Offering:</FormLabel>
        <Switch
          id="scarfOffering"
          onChange={() => setIsScarfOffering(!isScarfOffering)}
          colorScheme={getColorScheme()}
        /> */}
      </FormControl>

      <Container
        maxW={"full"}
        mt={12}
        as={SimpleGrid}
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      >
        <ChecklistGroup
          title="People"
          items={["Lector", "Altar Servers"]}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />

        <ChecklistGroup
          title="Incense"
          items={["Thurible", "Boat", "Incense", "Charcoal"]}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />

        <ChecklistGroup
          title="Vestments"
          items={["Humeral Veil"]}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />

        <ChecklistGroup
          title="Vessels"
          items={["Monstrance", "Luna"]}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />
      </Container>
      <Button mt={4} colorScheme={getColorScheme()} onClick={handleClearChecks}>
        Finish
      </Button>
    </Container>
  );
};

export default AdorationChecklist;
