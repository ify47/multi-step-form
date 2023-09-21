import {
  Flex,
  Image,
  Box,
  HStack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { LeftLayout } from "../components/LeftLayout";
import mbdesktop from "../assets/bg-sidebar-mobile.svg";
import { RightLayout } from "../components/RightLayout";
import { leftOptionsMobile } from "../components/Datas";

export const StepOne = () => {
  const [isMobile] = useMediaQuery("(max-width: 568px)");

  return (
    <>
      <Box display={{ base: "block", md: "none" }}>
        <Box position="absolute" left="50%" top="3%">
          <HStack
            position="relative"
            left="-50%"
            gap="11px"
            spacing="24px"
            pb="25px"
            zIndex="1"
          >
            {leftOptionsMobile.map((leftOptions) => {
              return (
                <Text
                  key={leftOptions.Number}
                  border={leftOptions.Number === "1" ? "" : "1px"}
                  color={
                    leftOptions.Number === "1"
                      ? "black"
                      : "leftLayout.borderColor"
                  }
                  bg={
                    leftOptions.Number === "1" ? "leftLayout.borderColor" : ""
                  }
                  width="30px"
                  textAlign="center"
                  height="30px"
                  borderRadius="full"
                  pt="2px"
                >
                  {leftOptions.Number}
                </Text>
              );
            })}
          </HStack>
        </Box>
        <Image
          src={mbdesktop}
          alt="mb desktop"
          w="100%"
          h="215px"
          objectFit="cover"
          position="fixed"
          top="0"
          display={{ base: "block", md: "none" }}
        />
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        bg={{ base: "", md: "white" }}
        p="15px"
        borderRadius="xl"
        width={`${isMobile ? "100vw" : ""}`}
      >
        <LeftLayout setActive="1" />
        <RightLayout />
      </Flex>
    </>
  );
};
