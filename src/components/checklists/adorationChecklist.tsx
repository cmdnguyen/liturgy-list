import React, { useState } from "react";
import {
  Container,
  FormControl,
  SimpleGrid,
  FormLabel,
  Switch,
  useBreakpointValue,
} from "@chakra-ui/react";
import ChecklistGroup from "./ChecklistGroup";

import { useLiturgyData } from "../../utils/hooks/useLiturgyData";

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
      value: "Thurible/Bình Hương",
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
      value: "Incense/Hương ",
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

  const vesselItems = [
    {
      value: "Monstrance//Mặt Nhật",
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
      imageSrc: "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/10365453_1448239222093712_3684333229862272216_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_ohc=3f_Us1o8n0AAX_9l9Z2&_nc_ht=scontent-dfw5-2.xx&oh=00_AfAm85Z_Fsfo4zzwnHDkp1aV1D0cTf5hopM0Fo5PN2TYOg&oe=65AC91F8",
    },
    {
      value: "Thiếu Nhi Scarf",
      imageSrc: "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/10490092_1448239468760354_645506287786349251_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4dc865&_nc_ohc=wBoNCQto-ycAX_PCN2o&_nc_ht=scontent-dfw5-2.xx&oh=00_AfCHVoNWDGUCekk1qNNfjUTQn1ZTxd22Fk1XSxcaHnVejw&oe=65ACA518",
    },
    {
      value: "Nghĩa Sĩ Scarf",
      imageSrc: "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.18172-8/1502733_1448239425427025_6436552988744171150_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4dc865&_nc_ohc=YAc4dI6M1XEAX9e3MUz&_nc_ht=scontent-dfw5-1.xx&oh=00_AfCB55ef3TkAvhrW4Q3rKKvfm1RakizDS20Joy3Z-zNTNg&oe=65AC9B08",
    },
    {
      value: "Hiệp Sĩ Scarf",
      imageSrc: "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/10495856_1448239255427042_1871172464176663144_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4dc865&_nc_ohc=YcH0yKyTjKAAX-1wPbq&_nc_ht=scontent-dfw5-2.xx&oh=00_AfD3kE6Xcor_AjoirRMGjjjAdnVBu6RlFipP90RQ0yUgNw&oe=65ACAA29",
    },
    {
      value: "Huynh Trưởng Scarf",
      imageSrc: "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/10275463_1448115658772735_5731386831961850356_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=4dc865&_nc_ohc=umJEXD40YlcAX-OHoAI&_nc_ht=scontent-dfw5-2.xx&oh=00_AfA6-leEptoq7NW6GyfCsTNQzpzKIlCyKSMRpCfubyNOEg&oe=65ACA686",
    },
    {
      value: "Huấn Luyện Viên Scarf",
      imageSrc: "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/10490092_1448239338760367_4957018321726432745_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=4dc865&_nc_ohc=X9Vh3-BXy8sAX9I_Gkh&_nc_ht=scontent-dfw5-2.xx&oh=00_AfBtiWiwj9lfADo4S9Rg4Ufcknc9czDz-0aWKj6OO7gnLw&oe=65AC88EF",
    },
    {
      value: "Trợ Tá Scarf",
      imageSrc: "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.18172-8/10338667_1448115775439390_1934864300601160202_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=4dc865&_nc_ohc=i3mqGSZTBsoAX8nOqKH&_nc_ht=scontent-dfw5-1.xx&oh=00_AfAfSQ0v2vGbY2Y8W_iiJRQz8AXMKJ1sdXpASeCm4rbI8w&oe=65AC9D18",
    },
    {
      value: "Trợ Uý Scarf",
      imageSrc: "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/10380201_1448115772106057_7118513952096477729_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4dc865&_nc_ohc=9vzp1X5qfhkAX_-OiuD&_nc_ht=scontent-dfw5-2.xx&oh=00_AfDNv3Dx2-1TxzaSxsvC-CPdzns5wu79Q2grEdKmAoJw2A&oe=65AC8028",
    },
    {
      value: "Tuyên Úy Scarf",
      imageSrc: "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.18172-8/10387092_1448115802106054_4868488717816499024_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=4dc865&_nc_ohc=B2s9x4fUV2UAX9-Izdo&_nc_ht=scontent-dfw5-1.xx&oh=00_AfCZS1zSj6DbqbBXK9MiRzecO3XhE6Hbf-BpHR6XPSOhSw&oe=65ACAC37",
    },
  ];
  return (
    <Container maxW={"full"}>
      <FormControl
        display={"block-inline-flex"}
        mt={3}
        mx={useBreakpointValue({ base: "0 auto", md: "auto" })}
        width={useBreakpointValue({
          base: "90%",
          sm: "50%",
          md: "45%",
          lg: "30%",
        })}
      >
        <FormLabel htmlFor="scarfOffering">Scarf Offering:</FormLabel>
        <Switch
          id="scarfOffering"
          onChange={() => setIsScarfOffering(!isScarfOffering)}
          colorScheme={getColorScheme()}
        />
      </FormControl>

      <Container
        maxW={"full"}
        mt={useBreakpointValue({ base: 0, md: 4 })}
        as={SimpleGrid}
        columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
        mx={"auto"}
      >
        <ChecklistGroup
          title="People"
          items={peopleItems}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />

        <ChecklistGroup
          title="Incense/Xông Hương"
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
          title="Vessels"
          items={vesselItems}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />

        {isScarfOffering && (
          <ChecklistGroup
            title="Scarf Offering/Dâng Khăn"
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
