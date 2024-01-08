import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Link,
  Image,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blue.200", "blue.700")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blue.600", "blue.800"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("blue.100", "blue.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={1}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box as={Stack}display="flex" alignItems={"center"}  direction={{ base: "column", md: "row" }}>
          <Text>
            © {new Date().getFullYear()} Tr. Catherine, Don Bosco Austin. All
            rights reserved.
          </Text>
          <Box display="flex" mx={3} >
            <Link href="https://www.instagram.com/donboscoaustin/">
              <Image
                src="/donboscologo.png"
                alt="don bosco austin logo"
                height={55}
                width={55}
              />
            </Link>
            <Link href="https://www.facebook.com/liendoanbienduc">
              <Image
                src="/liendoanbienduclogo.gif"
                alt="lien doan bien duc logo"
                height={55}
                width={55}
              />
            </Link>
          </Box>
        </Box>

        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"YouTube"}
            href={"https://www.youtube.com/channel/UCtklGCmSrMBX0yJerym6A5A"}
          >
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/cmdnguyen/"}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}