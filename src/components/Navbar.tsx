import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  Link,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Heading
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

import NextLink from 'next/link'

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          {/* <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            /> */}
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link 
            as={NextLink} 
            href="/"         
            _hover={{ textDecoration: "none" }}
            _focus={{ outline: "none" }}>
            <Heading
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              color={useColorModeValue("gray.800", "white")}
            >
              VEYM Liturgy List
            </Heading>
          </Link>
        </Flex>

        <Stack justify={"flex-end"} direction={"row"} spacing={6}>
          <Flex display={{ base: "flex", md: "flex" }}>
            <Button onClick={toggleColorMode}>
              {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>
            {/* <DesktopNav /> */}
          </Flex>
        </Stack>
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse> */}
    </Box>
  );
}

//   const DesktopNav = () => {
//     const linkColor = useColorModeValue("gray.600", "gray.200");
//     const linkHoverColor = useColorModeValue("gray.800", "white");
//     const popoverContentBgColor = useColorModeValue("white", "gray.800");

//     return (
//       <Stack direction={"row"} spacing={4} ml={5}>
//         {NAV_ITEMS.map((navItem) => (
//           <Box key={navItem.label}>
//             <Popover trigger={"hover"} placement={"bottom-start"}>
//               <PopoverTrigger>
//                 <Box
//                   as="a"
//                   p={2}
//                   href={navItem.href ?? "#"}
//                   fontSize={"xl"}
//                   fontWeight={500}
//                   color={linkColor}
//                   _hover={{
//                     textDecoration: "none",
//                     color: linkHoverColor,
//                   }}
//                 >
//                   {navItem.label}
//                 </Box>
//               </PopoverTrigger>

//               {navItem.children && (
//                 <PopoverContent
//                   border={0}
//                   boxShadow={"xl"}
//                   bg={popoverContentBgColor}
//                   p={4}
//                   rounded={"xl"}
//                   minW={"sm"}
//                 >
//                   <Stack>
//                     {navItem.children.map((child) => (
//                       <DesktopSubNav key={child.label} {...child} />
//                     ))}
//                   </Stack>
//                 </PopoverContent>
//               )}
//             </Popover>
//           </Box>
//         ))}
//       </Stack>
//     );
//   };

//   const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
//     return (
//       <Box
//         as="a"
//         href={href}
//         role={"group"}
//         display={"block"}
//         p={2}
//         rounded={"md"}
//         _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//       >
//         <Stack direction={"row"} align={"center"}>
//           <Box>
//             <Text
//               transition={"all .3s ease"}
//               _groupHover={{ color: "pink.400" }}
//               fontWeight={500}
//             >
//               {label}
//             </Text>
//             <Text fontSize={"sm"}>{subLabel}</Text>
//           </Box>
//           <Flex
//             transition={"all .3s ease"}
//             transform={"translateX(-10px)"}
//             opacity={0}
//             _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//             justify={"flex-end"}
//             align={"center"}
//             flex={1}
//           >
//             <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//           </Flex>
//         </Stack>
//       </Box>
//     );
//   };

//   const MobileNav = () => {
//     return (
//       <Stack
//         bg={useColorModeValue("white", "gray.800")}
//         p={4}
//         display={{ md: "none" }}
//       >
//         {NAV_ITEMS.map((navItem) => (
//           <MobileNavItem key={navItem.label} {...navItem} />
//         ))}
//       </Stack>
//     );
//   };

//   const MobileNavItem = ({ label, children, href }: NavItem) => {
//     const { isOpen, onToggle } = useDisclosure();

//     return (
//       <Stack spacing={4} onClick={children && onToggle}>
//         <Box
//           py={2}
//           as="a"
//           href={href ?? "#"}
//           justifyContent="space-between"
//           alignItems="center"
//           _hover={{
//             textDecoration: "none",
//           }}
//         >
//           <Text
//             fontWeight={600}
//             color={useColorModeValue("gray.600", "gray.200")}
//           >
//             {label}
//           </Text>
//           {children && (
//             <Icon
//               as={ChevronDownIcon}
//               transition={"all .25s ease-in-out"}
//               transform={isOpen ? "rotate(180deg)" : ""}
//               w={6}
//               h={6}
//             />
//           )}
//         </Box>

//         <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
//           <Stack
//             mt={2}
//             pl={4}
//             borderLeft={1}
//             borderStyle={"solid"}
//             borderColor={useColorModeValue("gray.200", "gray.700")}
//             align={"start"}
//           >
//             {children &&
//               children.map((child) => (
//                 <Box as="a" key={child.label} py={2} href={child.href}>
//                   {child.label}
//                 </Box>
//               ))}
//           </Stack>
//         </Collapse>
//       </Stack>
//     );
//   };

//   interface NavItem {
//     label: string;
//     subLabel?: string;
//     children?: Array<NavItem>;
//     href?: string;
//   }

//   const NAV_ITEMS: Array<NavItem> = [
//     {
//       label: "Chuyên Môn",
//       children: [
//         {
//           label: "Morse Code",
//           subLabel: "Learn some morse code",
//           href: "/chuyenmon/morse",
//         },
//         {
//           label: "Semaphore",
//           subLabel: "Test your eyes with semaphore",
//           href: "/chuyenmon/semaphore",
//         },
//         {
//           label: "Dấu Đường",
//           subLabel: "Road Signs",
//           href: "/chuyenmon/roadsigns",
//         },
//         {
//           label: "Nút Giày",
//           subLabel: "Knots",
//           href: "/chuyenmon/knots",
//         },
//       ],
//     },
//     {
//       label: "Ca Hát",
//       children: [
//         {
//           label: "Ca Chính Thức",
//           subLabel: "Learn the basic songs",
//           href: "/songs/basic",
//         },
//         {
//           label: "Sinh Hoạt",
//           subLabel: "Learn the camp songs",
//           href: "/songs/activities",
//         },
//         {
//           label: "Khen Thưởng",
//           subLabel: "Learn the award songs",
//           href: "/songs/awards",
//         },
//       ],
//     },
//   ];
