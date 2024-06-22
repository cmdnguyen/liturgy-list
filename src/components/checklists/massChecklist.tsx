//comoonents/checklists/massChecklist.tsx
import React from "react";
import {
  Container,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

import ChecklistGroup from "./checklistGroup";
import { useLiturgyData } from "../../utils/liturgyColorHelper";

import peopleItems from "./data/mass/people";
import liturgicalBooksItems from "./data/mass/liturgicalBooks";
import vesselsItems from "./data/mass/vessels";
import linenItems from "./data/mass/linen";
import scarfOfferingItems from "./data/scarfOffering";

interface MassChecklistProps {
  checkedValues: string[];
  setCheckedValues: React.Dispatch<React.SetStateAction<string[]>>;
  isVietnamese: boolean; 
  onToggleLanguage: () => void;
  isScarfOffering: boolean;
  onToggleScarfOffering: () => void; 
}

const MassChecklist: React.FC<MassChecklistProps> = ({
  checkedValues,
  setCheckedValues,
  isVietnamese,
  isScarfOffering,
}) => {
  const handleCheckboxChange = (values: string[]) => {
    setCheckedValues(values);
  };

  const { colorScheme } = useLiturgyData();


  return (
      <Container
        maxW={"full"}
        mt={useBreakpointValue({ base: 1, md: 4 })}
        as={SimpleGrid}
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
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
          title="Linen"
          items={linenItems}
          colorScheme={colorScheme}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
          isVietnamese={isVietnamese}
        />

        <ChecklistGroup
          title="Liturgical Books"
          vietTitle="Sách Phụng Vụ"
          items={liturgicalBooksItems}
          colorScheme={colorScheme}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
          isVietnamese={isVietnamese}
        />

        <ChecklistGroup
          title="Vessels"
          items={vesselsItems}
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

export default MassChecklist;
