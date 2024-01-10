//comoonents/checklists/massChecklist.tsx
import React from "react";
import {
  Container,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

import ChecklistGroup from "./checklistGroup";
import { useLiturgyData } from "../../utils/liturgyColorHelper";

interface MassChecklistProps {
  checkedValues: string[];
  setCheckedValues: React.Dispatch<React.SetStateAction<string[]>>;
  isVietnamese: boolean; 
  onToggleLanguage: () => void;
  isScarfOffering: boolean;
  onToggleScarfOffering: () => void; 
}

const MassChecklist: React.FC<MassChecklistProps> = ({
  checkedValues,
  setCheckedValues,
  isVietnamese,
  isScarfOffering,
}) => {
  const handleCheckboxChange = (values: string[]) => {
    setCheckedValues(values);
  };

  const { colorScheme } = useLiturgyData();

  

  const peopleItems = [
    { engName: "Lector" },
    {
      engName: "Altar Servers ",
      vietName: "Giúp Lễ",
      imageSrc: "./altarserver_cap12023.jpg",
    },
    { engName: "Ushers" },
    {
      engName: "Extraordinary Ministers of Holy Communion",
      vietName: "Thừa Tác Viên Thánh Thể",
    },
  ];
  const liturgicalBooksItems = [
    {
      engName: "Lectionary/Readings",
      vietName: "Sách Đọc Kinh",
      description:
        "The book that contains the readings for Mass or a folder that contains the printed readings for Mass",
      imageSrc:
        "https://cdnlp.blob.core.windows.net/litpress/images/cvr_thumbs/4513.jpg",
    },
    {
      engName: "Roman Missal",
      vietName: "Sách Lễ Rôma",
      description:
        "The book that contains the prayers for Mass the priest says at the altar",
      imageSrc:
        "https://www.leafletonline.com/media/catalog/product/cache/d96fd5e6c03a788a32ead8233439708d/2/4/24761_leachp-ed_w.jpg",
    },
    {
      engName: "Book of the Gospels",
      vietName: "Sách Tin Mừng",
      description: "The book that contains the Gospel readings for Mass",
      imageSrc:
        "https://cdnlp.blob.core.windows.net/litpress/images/cvr_thumbs/2572.jpg",
    },
  ];

  const vesselsItems = [
    {
      engName: "Paten",
      vietName: "Dĩa Thánh",
      description:
        "A shallow dish that holds the bread which becomes the Body of Christ; it must be gold or gold-plated.",
      imageSrc:
        "https://qph.cf2.quoracdn.net/main-qimg-e4fb0c64c8ac9413fbd70496bf553692-lq",
    },
    {
      engName: "Chalice",
      vietName: "Chén Thánh",
      description:
        "The large cup used to hold the wine which becomes the Blood of Christ; it must be of gold or silver.",
      imageSrc: "https://www.stempers.com/Content/ProductImages/A-138G.jpg",
    },
    {
      engName: "Ciborium",
      vietName: "Bát Thánh",
      description:
        "A bowl used to hold the hosts used for communion and also to reserve the Blessed Sacrament in the Tabernacle.",
      imageSrc:
        "https://assets.holyart.it/images/CL000015/us/500/R/SN027448/CLOSEUP05_HD/h-b451b375/ciborium-bowl-with-lid.jpg",
    },
    {
      engName: "Lavabo Bowl",
      vietName: "Bát Rửa Tay",
      description:
        "A bowl used by the priest to wash his hands before the Eucharistic Prayer.",
    },

    {
      engName: "Cruets",
      description:
        "Small glass capped bottles brought to the altar as gifts, they contain unconsecrated water and wine.",
      imageSrc:
        "https://cdn11.bigcommerce.com/s-t0lk210diy/images/stencil/640w/products/1825/5134/7752_8695_popup__82753.1652820872.jpg?c=1",
    },
    {
      engName: "Hosts",
      vietName: "Bánh Lễ",
      description:
        "The bread that becomes the Body of Christ; it must be unleavened and made of wheat flour and water only.",
      imageSrc:
        "https://wellsprings.com.sg/web/wp-content/uploads/2020/04/bread-for-communion.jpg",
    },
    {
      engName: "Altar Wine",
      vietName: "Rượu Lễ",
      description:
        "The wine that becomes the Blood of Christ; it must be natural wine made from grapes and contain no additives.",
      imageSrc:
        "https://www.churchsupplywarehouse.com/media/catalog/product/cache/396ec9ecd804173732678d2857828816/m/l/mlpaul750ml.jpg",
    },
    {
      engName: "Candles",
      vietName: "Nến",
      description:
        "Two candles are lit on the altar during Mass to represent the Light of Christ.",
    },
  ];

  const linenItems = [
    {
      engName: "Corporal",
      description:
        "A stiff white linen cloth on which are placed the vessels containing the bread and wine.",
      imageSrc: "https://www.catholicdoors.com/faq/1500/corporallinen.jpg",
    },
    {
      engName: "Purificator",
      description: "A white cloth used to cleanse the chalice.",
      imageSrc:
        "https://cdn11.bigcommerce.com/s-4c6eg5d3xf/images/stencil/1280x1280/products/17230/25580/58008-75l-purificator-2__08027.1683753367.jpg?c=1",
    },
    {
      engName: "Lavabo Towel",
      description:
        "A towel used by the priest to dry his hands after washing them.",
    },
    {
      engName: "Pall",
      description:
        "A stiff square white linen cover that is placed over the chalice to prevent anything from falling into it.",
    },
    {
      engName: "Altar Cloth",
      description:
        "A white cloth that covers the altar; it must be made of linen.",
    },
  ];

  const scarfOfferingItems = [
    {
      engName: "Ấu Nhi Scarf & Candle",
      vietName: "Khăn Ấu Nhi va Nến",
      imageSrc:
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/10365453_1448239222093712_3684333229862272216_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_ohc=3f_Us1o8n0AAX_9l9Z2&_nc_ht=scontent-dfw5-2.xx&oh=00_AfAm85Z_Fsfo4zzwnHDkp1aV1D0cTf5hopM0Fo5PN2TYOg&oe=65AC91F8",
    },
    {
      engName: "Thiếu Nhi Scarf & Candle",
      vietName: "Khăn Thiếu Nhi va Nến",
      imageSrc:
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/10490092_1448239468760354_645506287786349251_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4dc865&_nc_ohc=wBoNCQto-ycAX_PCN2o&_nc_ht=scontent-dfw5-2.xx&oh=00_AfCHVoNWDGUCekk1qNNfjUTQn1ZTxd22Fk1XSxcaHnVejw&oe=65ACA518",
    },
    {
      engName: "Nghĩa Sĩ Scarf & Candle",
      vietName: "Khăn Nghĩa Sĩ va Nến",
      imageSrc:
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.18172-8/1502733_1448239425427025_6436552988744171150_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4dc865&_nc_ohc=YAc4dI6M1XEAX9e3MUz&_nc_ht=scontent-dfw5-1.xx&oh=00_AfCB55ef3TkAvhrW4Q3rKKvfm1RakizDS20Joy3Z-zNTNg&oe=65AC9B08",
    },
    {
      engName: "Hiệp Sĩ Scarf & Candle",
      vietName: "Khăn Hiệp Sĩ va Nến",
      imageSrc:
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/10495856_1448239255427042_1871172464176663144_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4dc865&_nc_ohc=YcH0yKyTjKAAX-1wPbq&_nc_ht=scontent-dfw5-2.xx&oh=00_AfD3kE6Xcor_AjoirRMGjjjAdnVBu6RlFipP90RQ0yUgNw&oe=65ACAA29",
    },
    {
      engName: "Huynh Trưởng Scarf & Candle",
      vietName: "Khăn Huynh Trưởng va Nến",
      imageSrc:
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/10275463_1448115658772735_5731386831961850356_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=4dc865&_nc_ohc=umJEXD40YlcAX-OHoAI&_nc_ht=scontent-dfw5-2.xx&oh=00_AfA6-leEptoq7NW6GyfCsTNQzpzKIlCyKSMRpCfubyNOEg&oe=65ACA686",
    },
    {
      engName: "Huấn Luyện Viên Scarf & Candle",
      vietName: "Khăn Huấn Luyện Viên va Nến",
      imageSrc:
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/10490092_1448239338760367_4957018321726432745_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=4dc865&_nc_ohc=X9Vh3-BXy8sAX9I_Gkh&_nc_ht=scontent-dfw5-2.xx&oh=00_AfBtiWiwj9lfADo4S9Rg4Ufcknc9czDz-0aWKj6OO7gnLw&oe=65AC88EF",
    },
    {
      engName: "Trợ Tá Scarf & Candle",
      vietName: "Khăn Trợ Tá va Nến",
      imageSrc:
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.18172-8/10338667_1448115775439390_1934864300601160202_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=4dc865&_nc_ohc=i3mqGSZTBsoAX8nOqKH&_nc_ht=scontent-dfw5-1.xx&oh=00_AfAfSQ0v2vGbY2Y8W_iiJRQz8AXMKJ1sdXpASeCm4rbI8w&oe=65AC9D18",
    },
    {
      engName: "Trợ Uý Scarf & Candle",
      vietName: "Khăn Trợ Uý va Nến",
      imageSrc:
        "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/10380201_1448115772106057_7118513952096477729_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4dc865&_nc_ohc=9vzp1X5qfhkAX_-OiuD&_nc_ht=scontent-dfw5-2.xx&oh=00_AfDNv3Dx2-1TxzaSxsvC-CPdzns5wu79Q2grEdKmAoJw2A&oe=65AC8028",
    },
    {
      engName: "Tuyên Úy Scarf",
      vietName: "Khăn Tuyên Úy",
      imageSrc:
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.18172-8/10387092_1448115802106054_4868488717816499024_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=4dc865&_nc_ohc=B2s9x4fUV2UAX9-Izdo&_nc_ht=scontent-dfw5-1.xx&oh=00_AfCZS1zSj6DbqbBXK9MiRzecO3XhE6Hbf-BpHR6XPSOhSw&oe=65ACAC37",
    },
    {
      engName: "Vase of White Flowers or Candles",
      vietName: "Bình Hoa Trắng hoặc Nến",
    },
    {
      engName: "Candle",
      vietName: "Nến",
    },
    {
      engName: "Map of Vietnam/",
      vietName: "Bản đồ Việt Nam",
    },
  ];
  return (
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
          colorScheme={colorScheme}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
          isVietnamese={isVietnamese}
        />
        <ChecklistGroup
          title="Linen"
          items={linenItems}
          colorScheme={colorScheme}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
          isVietnamese={isVietnamese}
        />

        <ChecklistGroup
          title="Liturgical Books"
          vietTitle="Sách Phụng Vụ"
          items={liturgicalBooksItems}
          colorScheme={colorScheme}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
          isVietnamese={isVietnamese}
        />

        <ChecklistGroup
          title="Vessels"
          items={vesselsItems}
          colorScheme={colorScheme}
          onChange={handleCheckboxChange}
          checkedValues={checkedValues}
          isVietnamese={isVietnamese}
        />

        {isScarfOffering && (
          <ChecklistGroup
            title="Scarf Offering"
            vietTitle="Dâng Khăn"
            items={scarfOfferingItems}
            colorScheme={colorScheme}
            onChange={handleCheckboxChange}
            checkedValues={checkedValues}
            isVietnamese={isVietnamese}
          />
        )}
      </Container>
  );
};

export default MassChecklist;
