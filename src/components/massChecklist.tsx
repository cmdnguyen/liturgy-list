import { useState, useEffect } from "react";

import {
  Checkbox,
  CheckboxGroup,
  Stack,
  Switch,
  FormControl,
  FormLabel,
  SimpleGrid,
  Container,
  Heading,
  Button,
} from "@chakra-ui/react";

import fetchLiturgyData from "../utils/liturgyAPI";

export default function Checklist() {
  const [isScarfOffering, setIsScarfOffering] = useState(false);
  const [isSunday, setIsSunday] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [liturgyData, setLiturgyData] = useState<any>(null);
  const [liturgicalSeason, setLiturgicalSeason] = useState<string>("");
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const formatDate = (date: Date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    const fetchData = async () => {
      try {
        const data = await fetchLiturgyData(formattedDate);
        setLiturgyData(data);

        const season = data.season || "";
        setLiturgicalSeason(season.toLowerCase());
      } catch (error) {
        console.error("Error fetching liturgy data:", error);
      }
    };

    fetchData();
  }, []);

  const getColorScheme = () => {
    switch (liturgicalSeason) {
      case "advent":
        return "purple";
      case "christmas":
        return "gray";
      case "lent":
        return "purple";
      case "easter":
        return "gray";
      case "ordinary time":
        return "green";
      default:
        return "red";
    }
  };

  const handleCheckboxChange = (values: string[]) => {
    setCheckedValues(values);
  };

  const handleClearChecks = () => {
    setCheckedValues([]);
  };

  return (
    <Container maxW={"7xl"}>

      {/* {liturgyData && (
        <div>
          <Heading as="h2" size="xl" mb={4}>
            Liturgy Data
          </Heading>
          <pre>{JSON.stringify(liturgyData, null, 2)}</pre>
        </div>
      )} */}
      <FormControl>
        {/* <FormLabel htmlFor="isSunday">Sunday Mass:</FormLabel>
        <Switch
          id="isSunday"
          onChange={() => setIsSunday(!isSunday)}
          colorScheme={getColorScheme()}
        /> */}
        <FormLabel htmlFor="scarfOffering">Scarf Offering:</FormLabel>
        <Switch
          id="scarfOffering"
          onChange={() => setIsScarfOffering(!isScarfOffering)}
          colorScheme={getColorScheme()}
        />
      </FormControl>

      <Container
        maxW={"6xl"}
        mt={12}
        as={SimpleGrid}
        columns={{ base: 1, md: 2, lg: 3, xl: 4  }}
      >
        <CheckboxGroup
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          value={checkedValues}
        >
          <Stack pl={6} mt={1} spacing={1}>
            <Heading as="h3" size="lg">
              People
            </Heading>
            <Checkbox value="lector">Lector</Checkbox>
            <Checkbox value="altar-servers">Altar Servers</Checkbox>
            <Checkbox value="extraordinary-ministers">
              Extraordinary Ministers of Holy Communion
            </Checkbox>
          </Stack>
        </CheckboxGroup>

        <CheckboxGroup
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          value={checkedValues}
        >
          <Stack pl={6} mt={1} spacing={1}>
            <Heading as="h3" size="lg">
              Liturgical Books
            </Heading>
            <Checkbox value="lectionary">Lectionary</Checkbox>
            <Checkbox value="roman-missal">Roman Missal</Checkbox>
          </Stack>
        </CheckboxGroup>

        <CheckboxGroup
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          value={checkedValues}
        >
          <Stack pl={6} mt={1} spacing={1}>
            <Heading as="h3" size="lg">
              Vessels
            </Heading>
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

        {isScarfOffering && (
          <CheckboxGroup
            colorScheme={getColorScheme()}
            onChange={handleCheckboxChange}
            value={checkedValues}
          >
            <Stack pl={6} mt={1} spacing={1}>
              <Heading as="h3" size="lg">
                Scarf Offering
              </Heading>
              <Checkbox value="an-khan">Au Nhi Scarf</Checkbox>
              <Checkbox value="tn-khan">Thieu Nhi Scarf</Checkbox>
              <Checkbox value="ns-khan">Nghia Si Scarf</Checkbox>
              <Checkbox value="hs-khan">Hiep Si Scarf</Checkbox>
              <Checkbox value="ht-khan">Huynh Truong Scarf</Checkbox>
              <Checkbox value="hlv-khan">Huan Luyen Vien Scarf</Checkbox>
              <Checkbox value="tt-khan">Tro Ta Scarf</Checkbox>
              <Checkbox value="tro-uy-khan">Tro Uy Scarf</Checkbox>
              <Checkbox value="tuyen-uy-khan">Tuyen Uy Scarf</Checkbox>
            </Stack>
          </CheckboxGroup>
        )}
      </Container>
      <Button mt={4} colorScheme={getColorScheme()} onClick={handleClearChecks}>
        Finish
      </Button>
    </Container>
  );
}
