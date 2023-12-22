import React, { useState } from "react";
import {
  Checkbox,
  Stack,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

interface ChecklistItem {
  value: string;
  description?: string;
  imageSrc?: string;
}

interface ChecklistGroupProps {
  title: string;
  items: ChecklistItem[];
  colorScheme: string;
  onChange: (values: string[]) => void;
  checkedValues: string[];
}

const ChecklistGroup: React.FC<ChecklistGroupProps> = ({
  title,
  items,
  colorScheme,
  onChange,
  checkedValues,
}) => {
  const [selectedItem, setSelectedItem] = useState<ChecklistItem | null>(null);

  const handleOpenModal = (item: ChecklistItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleCheckboxChange = (value: string) => {
    const updatedValues = checkedValues.includes(value)
      ? checkedValues.filter((v) => v !== value)
      : [...checkedValues, value];
    onChange(updatedValues);
  };

  return (
    <>
      <Stack pl={useBreakpointValue({ base: 0, md: 6 })} spacing={1}>
        <Heading as="h3" size="lg" mt={useBreakpointValue({ base: 10, md: 1 })}>
          {title}
        </Heading>
        {items.map((item) => (
          <div
            key={item.value}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              colorScheme={colorScheme}
              value={item.value}
              isChecked={checkedValues.includes(item.value)}
              onChange={() => handleCheckboxChange(item.value)}
            >
              {item.value}
            </Checkbox>
            {(item.description || item.imageSrc) && (
              <Button
                ml={2}
                variant="ghost"
                p={1}
                size="base"
                onClick={() => handleOpenModal(item)}
              >
                <Icon as={InfoOutlineIcon} color="gray.500" />
              </Button>
            )}
          </div>
        ))}
        {selectedItem && (
          <Modal isOpen={!!selectedItem} onClose={handleCloseModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{selectedItem.value}</ModalHeader>
              <ModalBody>
                {selectedItem.imageSrc && (
                  <Image src={selectedItem.imageSrc} alt={selectedItem.value} />
                )}
                {selectedItem.description && <p>{selectedItem.description}</p>}
              </ModalBody>
              <ModalFooter>
                <Button colorScheme={colorScheme} onClick={handleCloseModal}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Stack>
    </>
  );
};

export default ChecklistGroup;
