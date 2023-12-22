import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Select,
} from "@chakra-ui/react";

import MassChecklist from "./massChecklist";
import AdorationChecklist from "./adorationChecklist";
import { useLiturgyData } from "../../utils/liturgyColorHelper";

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
      >
        <option value="mass">Mass</option>
        <option value="adoration">Adoration</option>
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
        mt={4}
        colorScheme={getColorScheme()}
        onClick={handleFinishButtonClick}
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
