//components/checklists/adorationChecklist.tsx
import React from "react";
import {
  Container,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import ChecklistGroup from "./ChecklistGroup";
import { useLiturgyData } from "../../utils/liturgyColorHelper";

import scarfOfferingItems from "./items/scarfOffering";
import incenseItems from "./items/adoration/incense";
import peopleItems from "./items/adoration/people";
import vestmentItems from "./items/adoration/vestments";
import vesselItems from "./items/adoration/vessel";
import linenItems from "./items/adoration/linen";

interface AdorationChecklistProps {
  checkedValues: string[];
  setCheckedValues: React.Dispatch<React.SetStateAction<string[]>>;
  isVietnamese: boolean;
  onToggleLanguage: () => void;
  isScarfOffering: boolean;
  onToggleScarfOffering: () => void;
}

const AdorationChecklist: React.FC<AdorationChecklistProps> = ({
  checkedValues,
  setCheckedValues,
  isVietnamese,
  onToggleLanguage,
  isScarfOffering,
  onToggleScarfOffering,
}) => {
  const handleCheckboxChange = (values: string[]) => {
    setCheckedValues(values);
  };

  const { colorScheme } = useLiturgyData();
  
  return (
    <Container
      maxW={"full"}
      mt={useBreakpointValue({ base: 0, md: 4 })}
      as={SimpleGrid}
      columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
      mx={"auto"}
    >
      <ChecklistGroup
        title="People"
        items={peopleItems}
        colorScheme={colorScheme}
        onChange={handleCheckboxChange}
        checkedValues={checkedValues}
        isVietnamese={isVietnamese}
      />

      <ChecklistGroup
        title="Incense"
        vietTitle="Xông Hương"
        items={incenseItems}
        colorScheme={colorScheme}
        onChange={handleCheckboxChange}
        checkedValues={checkedValues}
        isVietnamese={isVietnamese}
      />

      <ChecklistGroup
        title="Vestments"
        items={vestmentItems}
        colorScheme={colorScheme}
        onChange={handleCheckboxChange}
        checkedValues={checkedValues}
        isVietnamese={isVietnamese}
      />
      <ChecklistGroup
        title="Linen"
        items={linenItems}
        colorScheme={colorScheme}
        onChange={handleCheckboxChange}
        checkedValues={checkedValues}
        isVietnamese={isVietnamese}
      />

      <ChecklistGroup
        title="Vessels"
        items={vesselItems}
        colorScheme={colorScheme}
        onChange={handleCheckboxChange}
        checkedValues={checkedValues}
        isVietnamese={isVietnamese}
      />

      {isScarfOffering && (
        <ChecklistGroup
          title="Scarf Offering"
          vietTitle="Dâng Khăn"
          items={scarfOfferingItems}
          colorScheme={colorScheme}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
          isVietnamese={isVietnamese}
        />
      )}
    </Container>
  );
};

export default AdorationChecklist;
