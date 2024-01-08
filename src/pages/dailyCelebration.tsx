import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Heading, Box, Text, Container } from "@chakra-ui/react";
import LiturgyData from "../components/LiturgyData";
import ReadgingsData from "../components/ReadingsData";

export default function DailyCelebration() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleDateChange(date: Date) {
    setSelectedDate(date);
  }

  return (
    <Box as={Container} maxW={"6xl"} textAlign={"center"} m="auto">
        <Heading as='h3' size='2xl' mb={3}>Daily Readings & Celebrations</Heading>
      <Text my={3}>Select a date:</Text>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
      />
      <LiturgyData selectedDate={selectedDate} />
      <ReadgingsData selectedDate={selectedDate} />
    </Box>
  );
}
