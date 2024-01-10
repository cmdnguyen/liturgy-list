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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useRef, useEffect } from "react";

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
  onToggle,
}: {
  to: string;
  children: React.ReactNode;
  onToggle: () => void;
}) => (
  <Box
    key={to}
    px={2}
    py={1}
    style={{ textDecoration: "none" }}
    _focus={{ boxShadow: "none" }}
  >
    <Link
      as={NextLink}
      href={to}
      p="2"
      mx="1"
      borderRadius="lg"
      _hover={{
        bg: "blue.500",
        color: "white",
      }}
      onClick={onToggle}
    >
      {children}
    </Link>
  </Box>
);
const DesktopNav = () => (
  <>
    {Links.map((link) => (
      <NavItem key={link.to} to={link.to} onToggle={() => {}}>
        {link.name}
      </NavItem>
    ))}
  </>
);

const MobileNav = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && sidebarRef.current) {
      sidebarRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <IconButton
        onClick={onToggle}
        icon={
          isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={5} h={5} />
        }
        variant={"ghost"}
        aria-label={"Toggle Navigation"}
      />
      <Drawer placement="left" onClose={onToggle} isOpen={isOpen} finalFocusRef={sidebarRef}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              {Links.map((link) => (
                <NavItem key={link.to} to={link.to} onToggle={onToggle}>
                  {link.name}
                </NavItem>
              ))}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const headingText = useBreakpointValue({
    base: "Liturgy",
    md: "VEYM Liturgy",
  });

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
          {isMobile && (
            // Render MobileNav if it's a mobile view
            <MobileNav isOpen={isOpen} onToggle={onToggle} />
          )}
          <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
            <Flex align="center">
              <Image
                src="/tntt-meta.png"
                alt="TNTT-Logo"
                width={useBreakpointValue({ base: "70px", md: "90px" })}
              />
              <Heading
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
              >
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
          {!isMobile && (
            // Render DesktopNav if it's not a mobile view
            <DesktopNav />
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
