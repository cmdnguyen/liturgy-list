import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Heading,
  Box,
  Text,
  Container,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import LiturgyData from "../components/LiturgyData";
import ReadingsData from "../components/ReadingsData";

export default function DailyCelebration() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleDateChange(date: Date) {
    setSelectedDate(date);
  }

  return (
    <Box as={Container} maxW={"6xl"} textAlign={"center"} m="auto">
      <Heading as="h3" size="2xl" mb={3}>
        Daily Readings & Celebrations
      </Heading>
      <Text my={3}>Select a date:</Text>
      <ReactDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        customInput={
          <InputGroup>
            <Input
              type="text"
              value={selectedDate.toLocaleDateString()}
              isReadOnly
            />
            <InputRightElement>
              <CalendarIcon color="gray.500" />
            </InputRightElement>
          </InputGroup>
        }
      />
      <LiturgyData selectedDate={selectedDate} />
      <ReadingsData selectedDate={selectedDate} />
    </Box>
  );
}
