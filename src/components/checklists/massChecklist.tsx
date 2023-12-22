import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Switch,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

import ChecklistGroup from "./checklistGroup";
import { useLiturgyData } from "../../utils/liturgyColorHelper";

interface MassChecklistProps {
  checkedValues: string[];
  setCheckedValues: React.Dispatch<React.SetStateAction<string[]>>;
}

const MassChecklist: React.FC<MassChecklistProps> = ({
  checkedValues,
  setCheckedValues,
}) => {
  const handleCheckboxChange = (values: string[]) => {
    setCheckedValues(values);
  };
  const [isScarfOffering, setIsScarfOffering] = useState(false);
  // const [isSunday, setIsSunday] = useState(false);
  const { liturgyData, liturgicalSeason, getColorScheme } = useLiturgyData();

  const peopleItems = [
    { value: "Lector" },
    { value: "Altar Servers", imageSrc: "./altarserver_cap12023.jpg" },
    { value: "Ushers" },
    { value: "Extraordinary Ministers of Holy Communion" },
  ];
  const liturgicalBooksItems = [
    {
      value: "Lectionary/Readings",
      description:
        "The book that contains the readings for Mass or a folder that contains the printed readings for Mass",
      imageSrc:
        "https://cdnlp.blob.core.windows.net/litpress/images/cvr_thumbs/4513.jpg",
    },
    {
      value: "Roman Missal",
      description:
        "The book that contains the prayers for Mass the priest says at the altar",
      imageSrc:
        "https://www.leafletonline.com/media/catalog/product/cache/d96fd5e6c03a788a32ead8233439708d/2/4/24761_leachp-ed_w.jpg",
    },
    {
      value: "Book of the Gospels",
      description: "The book that contains the Gospel readings for Mass",
      imageSrc:
        "https://cdnlp.blob.core.windows.net/litpress/images/cvr_thumbs/2572.jpg",
    },
  ];

  const vesselsItems = [
    {
      value: "Paten",
      description:
        "A shallow dish that holds the bread which becomes the Body of Christ; it must be gold or gold-plated.",
      imageSrc:
        "https://qph.cf2.quoracdn.net/main-qimg-e4fb0c64c8ac9413fbd70496bf553692-lq",
    },
    {
      value: "Chalice",
      description:
        "The large cup used to hold the wine which becomes the Blood of Christ; it must be of gold or silver.",
      imageSrc: "https://www.stempers.com/Content/ProductImages/A-138G.jpg",
    },
    {
      value: "Ciborium",
      description:
        "A bowl used to hold the hosts used for communion and also to reserve the Blessed Sacrament in the Tabernacle.",
      imageSrc:
        "https://assets.holyart.it/images/CL000015/us/500/R/SN027448/CLOSEUP05_HD/h-b451b375/ciborium-bowl-with-lid.jpg",
    },
    {
      value: "Purificator",
      description: "A white cloth used to cleanse the chalice.",
      imageSrc:
        "https://cdn11.bigcommerce.com/s-4c6eg5d3xf/images/stencil/1280x1280/products/17230/25580/58008-75l-purificator-2__08027.1683753367.jpg?c=1",
    },
    {
      value: "Corporal",
      description:
        "A stiff white linen cloth on which are placed the vessels containing the bread and wine.",
      imageSrc: "https://www.catholicdoors.com/faq/1500/corporallinen.jpg",
    },
    {
      value: "Lavabo Bowl",
      description:
        "A bowl used by the priest to wash his hands before the Eucharistic Prayer.",
    },
    {
      value: "Lavabo Towel",
      description:
        "A towel used by the priest to dry his hands after washing them.",
    },
    {
      value: "Cruets",
      description:
        "Small glass capped bottles brought to the altar as gifts, they contain unconsecrated water and wine.",
      imageSrc:
        "https://cdn11.bigcommerce.com/s-t0lk210diy/images/stencil/640w/products/1825/5134/7752_8695_popup__82753.1652820872.jpg?c=1",
    },
    {
      value: "Hosts",
      description:
        "The bread that becomes the Body of Christ; it must be unleavened and made of wheat flour and water only.",
      imageSrc:
        "https://wellsprings.com.sg/web/wp-content/uploads/2020/04/bread-for-communion.jpg",
    },
    {
      value: "Altar Wine",
      description:
        "The wine that becomes the Blood of Christ; it must be natural wine made from grapes and contain no additives.",
      imageSrc:
        "https://www.churchsupplywarehouse.com/media/catalog/product/cache/396ec9ecd804173732678d2857828816/m/l/mlpaul750ml.jpg",
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
        maxW={"full"}
        mt={useBreakpointValue({ base: 1, md: 4 })}
        as={SimpleGrid}
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
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
          title="Liturgical Books"
          items={liturgicalBooksItems}
          colorScheme={getColorScheme()}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
        />

        <ChecklistGroup
          title="Vessels"
          items={vesselsItems}
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

export default MassChecklist;
