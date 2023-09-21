import { Box, Image, HStack, Text, Stack } from "@chakra-ui/react";
import bgdesktop from "../assets/bg-sidebar-desktop.svg";
import { leftOptions } from "./Datas";

type OptionProp = {
  setActive: string;
};

export function LeftLayout({ setActive }: OptionProp) {
  return (
    <Box position="relative">
      <Image
        src={bgdesktop}
        alt="bg desktop"
        maxWidth="29vw"
        display={{ base: "none", md: "block" }}
      />

      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        top="5%"
        left="5%"
      >
        {leftOptions.map((leftOption) => {
          return (
            <HStack
              key={leftOption.number}
              gap="11px"
              position="relative"
              spacing="24px"
              pb="25px"
            >
              <Text
                border={leftOption.number === setActive ? "" : "1px"}
                color={
                  leftOption.number === setActive
                    ? "black"
                    : "leftLayout.borderColor"
                }
                bg={
                  leftOption.number === setActive
                    ? "leftLayout.borderColor"
                    : ""
                }
                width="30px"
                textAlign="center"
                height="30px"
                borderRadius="full"
                pt="2px"
              >
                {leftOption.number}
              </Text>
              <Stack gap="0">
                <Text fontSize="xs" color="leftLayout.primaryText">
                  {leftOption.step}
                </Text>
                <Text fontSize="sm" as="b" color="leftLayout.secondaryText">
                  {leftOption.description}
                </Text>
              </Stack>
            </HStack>
          );
        })}
      </Box>
    </Box>
  );
}
