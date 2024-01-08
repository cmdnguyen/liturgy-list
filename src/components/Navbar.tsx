import {
  Box,
  Flex,
  Link,
  useColorMode,
  IconButton,
  Button,
  useBreakpointValue,
  Heading,
  Image,
  useDisclosure,
  Collapse,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useState } from "react";

const Links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Daily Readings",
    to: "/dailyReadings",
  },
];

const NavItem = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Box key={to} px={2} py={1}>
    <Link as={NextLink} href={to} _hover={{ textDecoration: "none" }}>
      {children}
    </Link>
  </Box>
);

const DesktopNav = () => (
  <>
    {Links.map((link) => (
      <NavItem key={link.to} to={link.to}>
        {link.name}
      </NavItem>
    ))}
  </>
);

const MobileNav = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => (
  <>
    <IconButton
      onClick={onToggle}
      icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
      variant={"ghost"}
      aria-label={"Toggle Navigation"}
    />
    <Collapse in={isOpen} animateOpacity>
      <Box mt={2} pl={4} borderLeft={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")}>
        {Links.map((link) => (
          <NavItem key={link.to} to={link.to}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Collapse>
  </>
);


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const headingText = useBreakpointValue({ base: "Liturgy", md: "VEYM Liturgy" });

  return (
    <Box>
      <Flex
        bg={colorMode === "light" ? "blue.100" : "blue.900"}
        color={colorMode === "light" ? "gray.700" : "gray.200"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={"start"}>
          <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
            <Flex align="center">
              <Image
                src="/tntt-meta.png"
                alt="TNTT-Logo"
                width={useBreakpointValue({ base: "70px", md: "90px" })}
              />
              <Heading textAlign={useBreakpointValue({ base: "center", md: "left" })}>
                {headingText}
              </Heading>
            </Flex>
          </Link>
        </Flex>

        {/* Theme Switch Button Outside Navigation */}
        <Button onClick={toggleColorMode}>
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Flex display={{ base: "flex", md: "flex" }}>
          {isMobile ? (
            <MobileNav isOpen={isOpen} onToggle={onToggle} />
          ) : (
            <DesktopNav />
          )}
        </Flex>


      </Flex>
    </Box>
  );
}
