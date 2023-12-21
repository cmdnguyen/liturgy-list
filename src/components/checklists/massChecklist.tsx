import React, { useState } from "react";
import {
  Container,
  Button,
  FormControl,
  FormLabel,
  Switch,
  SimpleGrid,
} from "@chakra-ui/react";
import ChecklistGroup from "./index";
import { useLiturgyData } from "../../utils/liturgyColorHelper";

const MassChecklist: React.FC = () => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const [isScarfOffering, setIsScarfOffering] = useState(false);
  // const [isSunday, setIsSunday] = useState(false);
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
        {/* <FormLabel htmlFor="isSunday">Sunday Mass:</FormLabel>
        <Switch
          id="isSunday"
          onChange={() => setIsSunday(!isSunday)}
          colorScheme={getColorScheme()}
        /> */}
        <FormLabel htmlFor="scarfOffering">Scarf Offering:</FormLabel>
        <Switch
          id="scarfOffering"
          onChange={() => setIsScarfOffering(!isScarfOffering)}
          colorScheme={getColorScheme()}
        />
      </FormControl>

      <Container
        maxW={"full"}
        mt={12}
        as={SimpleGrid}
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      >
        <ChecklistGroup
          title="People"
          items={[
            "Lector",
            "Altar Servers",
            "Extraordinary Ministers of Holy Communion",
          ]}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />

        <ChecklistGroup
          title="Liturgical Books"
          items={["Lectionary", "Roman Missal"]}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />

        <ChecklistGroup
          title="Vessels"
          items={[
            "Chalice",
            "Paten",
            "Ciborium",
            "Purificator",
            "Corporal",
            "Lavabo",
            "Altar Cloth",
            "Cruets",
          ]}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />

        {isScarfOffering && (
          <ChecklistGroup
            title="Scarf Offering"
            items={[
              "Au Nhi Scarf",
              "Thieu Nhi Scarf",
              "Nghia Si Scarf",
              "Hiep Si Scarf",
              "Huynh Truong Scarf",
              "Huan Luyen Vien Scarf",
              "Tro Ta Scarf",
              "Tro Uy Scarf",
              "Tuyen Uy Scarf",
            ]}
            colorScheme={getColorScheme()}
            onChange={handleCheckboxChange}
            checkedValues={checkedValues}
          />
        )}
      </Container>
      <Button mt={4} colorScheme={getColorScheme()} onClick={handleClearChecks}>
        Finish
      </Button>
    </Container>
  );
};

export default MassChecklist;
