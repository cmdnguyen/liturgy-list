import React from "react";
import { Checkbox, CheckboxGroup, Stack, Heading } from "@chakra-ui/react";

interface ChecklistGroupProps {
  title: string;
  items: string[];
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
}) => (
  <CheckboxGroup colorScheme={colorScheme} onChange={onChange} value={checkedValues}>
    <Stack pl={6} mt={1} spacing={1}>
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      {items.map((item) => (
        <Checkbox key={item} value={item}>
          {item}
        </Checkbox>
      ))}
    </Stack>
  </CheckboxGroup>
);

export default ChecklistGroup;