import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Heading,
  Box,
  Divider,
  Container,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import LiturgyData from "../components/LiturgyData";
import ReadingsData from "../components/ReadingsData";
import Hero from "../components/Hero";
import DHTTMass from "../../public/mass_dhtt2023.jpg";

export default function DailyCelebration() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const heroText = "Daily Readings & Celebrations";
  function handleDateChange(date: Date) {
    setSelectedDate(date);
  }

  return (
    <>
      <Hero backgroundImageSrc={DHTTMass} heroText={heroText} />
      <Box as={Container} maxW={"6xl"} textAlign={"center"} m="auto">
        <Heading size="md" my={3}>Select a date:</Heading>
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
        <Divider mt={5} />
        <ReadingsData selectedDate={selectedDate} />
      </Box>
    </>
  );
}
