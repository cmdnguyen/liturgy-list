//components/checklists/index.tsx
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
  useBreakpointValue,
  Divider,
  Flex,
  FormLabel,
  Switch,
  FormControl,
} from "@chakra-ui/react";

import { LanguageProvider } from "../../context/LanguageContext";

import MassChecklist from "./MassChecklist";
import AdorationChecklist from "./AdorationChecklist";
import { useLiturgyData } from "../../utils/liturgyColorHelper";
import ReadingsData from "../ReadingsData";

const ChecklistIndex: React.FC = () => {
  const [isFinishModalOpen, setIsFinishModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("mass");
  const { colorScheme } = useLiturgyData();
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const [isVietnamese, setIsVietnamese] = useState(false);
  const [isScarfOffering, setIsScarfOffering] = useState(false);

  const handleFinishButtonClick = () => {
    setCheckedValues([]);
    setIsFinishModalOpen(true);
  };

  const handleCloseFinishModal = () => {
    setIsFinishModalOpen(false);
  };

  const handleToggleLanguage = () => {
    setIsVietnamese((prev) => !prev);
  };

  const handleToggleScarfOffering = () => {
    setIsScarfOffering((prev) => !prev);
  };

  return (
    <LanguageProvider>
      <Select
        placeholder={isVietnamese ? "Chọn tùy chọn" : "Select option"}
        value={selectedOption}
        onChange={(event) => setSelectedOption(event.target.value)}
        display={"block"}
        m={useBreakpointValue({ base: "0 auto", md: "auto" })}
        width={useBreakpointValue({
          base: "90%",
          sm: "50%",
          md: "45%",
          lg: "30%",
        })}
      >
        <option value="mass">{isVietnamese ? "Thánh Lễ" : "Mass"}</option>
        <option value="adoration">
          {isVietnamese ? "Chầu Thánh Thể" : "Adoration"}
        </option>
      </Select>
      <FormControl
        mt={3}
        mx={useBreakpointValue({ base: "0 auto", md: "auto" })}
        width={useBreakpointValue({
          base: "90%",
          sm: "50%",
          md: "45%",
          lg: "30%",
        })}
      >
        <Flex flexDirection="column">
          <Flex flexDirection="row" alignItems="center">
            <FormLabel htmlFor="scarfOffering">
              {isVietnamese ? "Dâng Khăn" : "Scarf Offering"}
            </FormLabel>
            <Switch
              id="scarfOffering"
              onChange={handleToggleScarfOffering}
              colorScheme={colorScheme}
            />
          </Flex>
          <Flex flexDirection="row" alignItems="center">
            <FormLabel htmlFor="languageSwitch">
              {isVietnamese ? "English" : "Tiếng Việt"}
            </FormLabel>
            <Switch
              id="languageSwitch"
              onChange={handleToggleLanguage}
              colorScheme={colorScheme}
            />
          </Flex>
        </Flex>
      </FormControl>

      {selectedOption === "mass" && (
        <MassChecklist
          checkedValues={checkedValues}
          setCheckedValues={setCheckedValues}
          isVietnamese={isVietnamese}
          onToggleLanguage={handleToggleLanguage}
          isScarfOffering={isScarfOffering}
          onToggleScarfOffering={handleToggleScarfOffering}
        />
      )}
      {selectedOption === "adoration" && (
        <AdorationChecklist
          checkedValues={checkedValues}
          setCheckedValues={setCheckedValues}
          isVietnamese={isVietnamese}
          onToggleLanguage={handleToggleLanguage}
          isScarfOffering={isScarfOffering}
          onToggleScarfOffering={handleToggleScarfOffering}
        />
      )}

      <Button
        mt={10}
        colorScheme={colorScheme}
        onClick={handleFinishButtonClick}
        display={"block"}
        mx={useBreakpointValue({ base: "0 auto", md: "auto" })}
      >
        {isVietnamese ? "Hoàn thành" : "Finish"}
      </Button>
      {selectedOption === "mass" && (
        <>
          <Divider mt={5} />
          <ReadingsData />
        </>
      )}
      <Modal isOpen={isFinishModalOpen} onClose={handleCloseFinishModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {isVietnamese ? "Hoàn thành" : "Finish Checklist"}
          </ModalHeader>
          <ModalBody>
            <p>
              {isVietnamese ? "Thiết lập hoàn tất." : "Set up is complete."}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme={colorScheme} onClick={handleCloseFinishModal}>
              {isVietnamese ? "Đóng" : "Close"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </LanguageProvider>
  );
};

export default ChecklistIndex;
