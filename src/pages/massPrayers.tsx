import Hero from "../components/Hero";
import MassImage from "../../public/mass_cap12021.jpg";
import { Container, Text, Heading, Box } from "@chakra-ui/react";

export default function AdorationResources() {
  const heroText = "Prayers used during Mass";
  return (
    <>
      <Hero heroText={heroText} backgroundImageSrc={MassImage} />
      <Container maxW="full">
        <Container maxW="2xl" my={4}>
          <Heading size="lg" my={2}>
            Mass Prayers
          </Heading>
          <Heading size="md" mb={2}>
            Kinh Trông Cậy
          </Heading>
          <Text>
            Chúng con trông cậy rất thánh Đức Mẹ Chúa Trời, xin chớ chê chớ bỏ
            lời con nguyện, trong cơn gian nan thiếu thốn, Đức Nữ Đồng Trinh
            hiển vinh sáng láng hằng chữa chúng con cho khỏi mọi sự dữ, Amen.
            <br /> <br />
            Thưa: Lạy rất thánh Trái Tim Đức Chúa Giêsu.
            <br />
            Đáp: Thương xót chúng con. <br />
            Thưa: Lạy Trái Tim cực Thánh cực tịnh Rất Thánh Đức Bà Maria. <br />
            Đáp: Cầu cho chúng con. <br />
            Thưa: Lạy Ông thánh Giuse là bạn thanh sạch Đức Bà Maria trọn đời
            đồng trinh. <br />
            Đáp: Cầu cho chúng con. <br />
            Thưa: Các Thánh Tử Vì Đạo nước Việt Nam. <br />
            Đáp: Cầu cho chúng con. <br />
            Thưa: Nữ Vương ban sự bằng an. <br />
            Đáp: Cầu cho chúng con.
          </Text>
        </Container>
      </Container>
    </>
  );
}
