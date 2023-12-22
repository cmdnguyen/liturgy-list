import React, { useState } from "react";
import {
  Container,
  FormControl,
  SimpleGrid,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import ChecklistGroup from "./checklistGroup";

import { useLiturgyData } from "../../utils/liturgyColorHelper";

interface AdorationChecklistProps {
  checkedValues: string[];
  setCheckedValues: React.Dispatch<React.SetStateAction<string[]>>;
}

const AdorationChecklist: React.FC<AdorationChecklistProps> = ({
  checkedValues,
  setCheckedValues,
}) => {
  const handleCheckboxChange = (values: string[]) => {
    setCheckedValues(values);
  };
  const { liturgyData, liturgicalSeason, getColorScheme } = useLiturgyData();
  const [isScarfOffering, setIsScarfOffering] = useState(false);

  const peopleItems = [{ value: "Lector" }, { value: "Altar Servers" }];

  const incenseItems = [
    {
      value: "Thurible",
      description: "Incense burner",
      imageSrc:
        "https://todayscatholic.org/wp-content/uploads/2020/03/IMG_5533-683x1024.jpg",
    },
    {
      value: "Incense Boat",
      description: "Incense holder",
      imageSrc:
        "https://lh3.googleusercontent.com/-pKbklKhsCxo/X6Hw0wxrA_I/AAAAAAAAoM4/Bam8MMX_owoW8lE0FgiaNpS4yJx68f6kwCLcBGAsYHQ/w400-h194/two%2Bboat.png",
    },
    {
      value: "Incense",
      description: "Incense",
      imageSrc: "https://www.marianland.com/milagrosaintinsense/BS668.JPG",
    },
  ];

  const vestmentItems = [
    {
      value: "Cope",
      description: "Outer garment",
      imageSrc:
        "https://www.religious-supplies.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/d/adoration_collection_clergy_cope.jpg",
    },
    {
      value: "Humeral veil",
      description: "Outer garment",
      imageSrc:
        "https://www.religious-supplies.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/d/adoration_collection_humeral_veil.jpg",
    },
  ];

  const vessalItems = [
    {
      value: "Monstrance",
      description: "Holds the Eucharist",
      imageSrc:
        "https://cdn11.bigcommerce.com/s-du09xubjip/images/stencil/original/products/50860/551881/2060839_1_2023-02-16T20_04_05Z__87894.1676578698.jpg?c=2",
    },
    {
      value: "Luna",
      description: "Used to the Eucharist in Monstrance",
      imageSrc:
        "https://www.sunjournal.com/wp-content/uploads/sites/11/2017/01/Luna-PS.jpg",
    },
  ];

  const scarfOfferingItems = [
    {
      value: "Ấu Nhi Scarf",
      imageSrc: "http://www.tnttarts.com/archives/Khan_Au_Nhi_2.jpg",
    },
    {
      value: "Thiếu Nhi Scarf",
      imageSrc: "http://www.tnttarts.com/archives/Khan_Thieu_Nhi_2.jpg",
    },
    {
      value: "Nghĩa Sĩ Scarf",
      imageSrc: "http://www.tnttarts.com/archives/Khan_Nghia_Si_2.jpg",
    },
    {
      value: "Hiệp Sĩ Scarf",
      imageSrc: "http://www.tnttarts.com/archives/Khan_Hiep_Si_2.jpg",
    },
    {
      value: "Huynh Trưởng Scarf",
      imageSrc: "http://www.tnttarts.com/archives/Khan_Huynh_Truong.jpg",
    },
    {
      value: "Huấn Luyện Viên Scarf",
      imageSrc: "http://www.tnttarts.com/archives/Khan_HLV_2.jpg",
    },
    {
      value: "Trợ Tá Scarf",
      imageSrc: "http://www.tnttarts.com/archives/Khan_Tro_Ta.jpg",
    },
    {
      value: "Trợ Uý Scarf",
      imageSrc: "http://www.tnttarts.com/archives/Khan_Tro_Uy.jpg",
    },
    {
      value: "Tuyên Úy Scarf",
      imageSrc: "http://www.tnttarts.com/archives/Khan_Tuyen_Uy.jpg",
    },
  ];
  return (
    <Container maxW={"full"} mt={1}>
      <FormControl>
        <FormLabel htmlFor="scarfOffering">Scarf Offering:</FormLabel>
        <Switch
          id="scarfOffering"
          onChange={() => setIsScarfOffering(!isScarfOffering)}
          colorScheme={getColorScheme()}
        />
      </FormControl>

      <Container
        maxW={"full"}
        mt={12}
        as={SimpleGrid}
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      >
        <ChecklistGroup
          title="People"
          items={peopleItems}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />

        <ChecklistGroup
          title="Incense"
          items={incenseItems}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />

        <ChecklistGroup
          title="Vestments"
          items={vestmentItems}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />

        <ChecklistGroup
          title="Vessals"
          items={vessalItems}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />

        {isScarfOffering && (
          <ChecklistGroup
            title="Scarf Offering"
            items={scarfOfferingItems}
            colorScheme={getColorScheme()}
            onChange={handleCheckboxChange}
            checkedValues={checkedValues}
          />
        )}
      </Container>
    </Container>
  );
};

export default AdorationChecklist;
