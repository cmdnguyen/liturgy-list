import {
  Checkbox,
  CheckboxGroup,
  Stack,
  Switch,
  FormControl,
  FormLabel,
  SimpleGrid,
  Container,
  Heading
} from "@chakra-ui/react";

export default function Checklist() {
  return (
    <Container maxW={'7xl'}>
      <FormControl>
        <FormLabel htmlFor="isSunday">Sunday Mass:</FormLabel>
        <Switch id="isSunday" />
        <FormLabel htmlFor="scarfOffering">Scarf Offering:</FormLabel>
        <Switch id="scarfOffering" />
      </FormControl>

      <Container maxW={'6xl'} mt={12} as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
      <CheckboxGroup colorScheme="red">
        <Stack pl={6} mt={1} spacing={1}>
        <Heading as='h3' size='lg'>People</Heading>
          <Checkbox value="lector">Lector</Checkbox>
          <Checkbox value="altar-servers">Altar Servers</Checkbox>
          <Checkbox value="extraordinary-ministers">
            Extraordinary Ministers of Holy Communion
          </Checkbox>
        </Stack>
      </CheckboxGroup>

      <CheckboxGroup colorScheme="blue">
        <Stack pl={6} mt={1} spacing={1}>
        <Heading as='h3' size='lg'>Liturgical Books</Heading>
          <Checkbox value="lectionary">Lectionary</Checkbox>
          <Checkbox value="roman-missal">Roman Missal</Checkbox>
          <Checkbox value="lectionary-cover">Lectionary Cover</Checkbox>
          <Checkbox value="roman-missal-cover">Roman Missal Cover</Checkbox>
        </Stack>
        </CheckboxGroup>
      
      <CheckboxGroup colorScheme="green">
        <Stack pl={6} mt={1} spacing={1}>
        <Heading as='h3' size='lg'>Vessels</Heading>
          <Checkbox value="chalice">Chalice</Checkbox>
          <Checkbox value="paten">Paten</Checkbox>
          <Checkbox value="ciborium">Ciborium</Checkbox>
          <Checkbox value="purificator">Purificator</Checkbox>
          <Checkbox value="corporal">Corporal</Checkbox>
          <Checkbox value="lavabo">Lavabo</Checkbox>
          <Checkbox value="altar-cloth">Altar Cloth</Checkbox>
          <Checkbox value="cruets">Cruets</Checkbox>
        </Stack>
      </CheckboxGroup>

      <CheckboxGroup colorScheme="purple">
        <Stack pl={6} mt={1} spacing={1}>
        <Heading as='h3' size='lg'>Scarf Offering</Heading>
          <Checkbox value="an-khan">Au Nhi Scarf</Checkbox>
          <Checkbox value="tn-khan">Thieu Nhi Scarf</Checkbox>
          <Checkbox value="ns-khan">Nghia Si Scarf</Checkbox>
          <Checkbox value="hs-khan">Hiep Si Scarf</Checkbox>
          <Checkbox value="ht-khan">Huynh Truong Scarf</Checkbox>
          <Checkbox value="hlv-khan">Huan Luyen Vien Scarf</Checkbox>
          <Checkbox value="tt-khan">Tro Ta Scarf</Checkbox>
          <Checkbox value="tro-uy-khan">Tro Uy Scarf</Checkbox>
          <Checkbox value="tuyen-uy-khan">Tuyen Uy Scarf</Checkbox>
          <Checkbox value="biretta">Biretta</Checkbox>
          <Checkbox value="zuchetto">Zuchetto</Checkbox>
        </Stack>
      </CheckboxGroup>
      </Container>
    </Container>
  );
}
