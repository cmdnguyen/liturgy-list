import React, { use, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Select,
  useBreakpointValue,
} from "@chakra-ui/react";

import MassChecklist from "./massChecklist";
import AdorationChecklist from "./adorationChecklist";
import { useLiturgyData } from "../../utils/hooks/useLiturgyData";

const ChecklistIndex: React.FC = () => {
  const [isFinishModalOpen, setIsFinishModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("mass");
  const { liturgyData, liturgicalSeason, getColorScheme } = useLiturgyData();
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const handleFinishButtonClick = () => {
    setCheckedValues([]);
    setIsFinishModalOpen(true);
  };

  const handleCloseFinishModal = () => {
    setIsFinishModalOpen(false);
  };

  return (
    <>
      <Select
        placeholder="Select option"
        value={selectedOption}
        onChange={(event) => setSelectedOption(event.target.value)}
        display={"block"}
        m={useBreakpointValue({ base: "0 auto", md: "auto" })}
        width={useBreakpointValue({ base: "90%", sm:"50%", md: "45%",lg: "30%" })}
      >
        <option value="mass">Mass/Thánh Lễ </option>
        <option value="adoration">Adoration/Chầu Thánh Thể</option>
      </Select>

      {selectedOption === "mass" && (
        <MassChecklist
          checkedValues={checkedValues}
          setCheckedValues={setCheckedValues}
        />
      )}
      {selectedOption === "adoration" && (
        <AdorationChecklist
          checkedValues={checkedValues}
          setCheckedValues={setCheckedValues}
        />
      )}

      <Button
        mt={10}
        colorScheme={getColorScheme()}
        onClick={handleFinishButtonClick}
        display={"block"}
        mx={useBreakpointValue({ base: "0 auto", md: "auto" })}
      >
        Finish
      </Button>

      <Modal isOpen={isFinishModalOpen} onClose={handleCloseFinishModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Finish Checklist</ModalHeader>
          <ModalBody>
            <p>Set up is complete.</p>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={getColorScheme()}
              onClick={handleCloseFinishModal}

            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChecklistIndex;
