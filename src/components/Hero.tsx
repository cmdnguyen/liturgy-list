"use client";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import ImageFuture from "next/image";
import backgroundImage from "../../public/chaVietMonstrance_dhtt2023.jpg"
import { useState } from "react";

export default function Hero() {
    const [heroImageIsReady, setHeroImageIsReady] = useState(false);
  return (
    <Flex
      w="full"
      position="relative"
      h={{ base: 96, sm: "28rem", md: "32rem", lg: "40rem" }}
      overflow="hidden"
    >
    <ImageFuture
        src={backgroundImage}
        alt="background"
        placeholder="blur"
        style={{
          objectFit: "cover",
          transitionProperty: "filter",
          transitionDuration: "1000ms",
          transform: `scale(${heroImageIsReady ? 1 : 1.01})`,
          filter: heroImageIsReady ? "blur(2px)" : "blur(20px)",
        }}
        onLoadingComplete={() => {
          setHeroImageIsReady(true);
        }}
        fill
        priority
      />
        <Flex
        align="center"
        pos="relative"
        px={{ base: 4, sm: 10, md: 12, lg: 24 }}
        boxSize="full"
        bg={{ base: "none", md: "none" }}
      >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Thiếu Nhi Thánh Thể <br />
            Phung Vu Library
          </Text>
          {/* <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Show me more
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show me more
            </Button>
          </Stack> */}
        </Stack>
      </VStack>
    </Flex>
    </Flex>
  );
}
