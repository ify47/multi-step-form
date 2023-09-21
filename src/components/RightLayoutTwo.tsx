import {
  Heading,
  Box,
  Text,
  SimpleGrid,
  Button,
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Switch,
  Link,
  useRadioGroup,
} from "@chakra-ui/react";

import { CardRadio } from "./CardRadio";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { getCardOptions } from "./Datas";

export const RightLayoutTwo = () => {
  const [amounts, setAmounts] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const cardOptions = getCardOptions(amounts);

  // Initialize names and amountt variables

  const { value, getRootProps, getRadioProps } = useRadioGroup({
    name: "plans",
    defaultValue: "arcade",
    onChange: (selectedValue) => {
      // Get the name and amount of the selected option
      const selectedOption = cardOptions.find(
        (option) => option.value === selectedValue
      );

      if (selectedOption) {
        formik.setValues({
          plan: selectedValue,
          name: selectedOption.name,
          amount: selectedOption.amount,
          cost: selectedOption.cost,
          amountNumber: selectedOption.amountNumber,
        });
      }
    },
  });

  const group = getRootProps();

  const formik = useFormik({
    initialValues: {
      plan: value,
      name: cardOptions[0].name,
      amount: cardOptions[0].amount,
      cost: cardOptions[0].cost,
      amountNumber: cardOptions[0].amountNumber,
    },

    onSubmit: (values) => {
      navigate("/step-three", { state: { ...location.state, data2: values } });
    },
  });

  // Use useEffect to update Formik values when the switch is toggled
  useEffect(() => {
    formik.setValues({
      ...formik.values,
      amount:
        cardOptions.find((option) => option.value === formik.values.plan)
          ?.amount || "",
      cost:
        cardOptions.find((option) => option.value === formik.values.plan)
          ?.cost || "",
      amountNumber:
        cardOptions.find((option) => option.value === formik.values.plan)
          ?.amountNumber || 0,
    });
  }, [amounts, formik.values.plan]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack gap={{ base: "", md: "6.8rem" }} pl={{ base: "0", md: "50px" }}>
        <Box
          pl={{ base: "0", md: "66px" }}
          pr={{ base: "0", md: "65px" }}
          pb={{ base: "0", md: "0" }}
          p={{ base: "34px", md: "30px" }}
          position={{ base: "relative", md: "unset" }}
          backgroundColor={{ base: "white", md: "" }}
          borderRadius={{ base: "xl", md: "" }}
        >
          <Heading size="lg" pb="10px" color="rightLayout.primaryText">
            Select your plan
          </Heading>
          <Text fontSize="md" pb="25px" color="rightLayout.secondaryText">
            You have the option of monthly or yearly billing.
          </Text>
          <Box>
            <SimpleGrid
              spacing={4}
              gap="20px"
              templateColumns={{
                base: "",
                md: "repeat(3, 1fr)",
              }}
              {...group}
            >
              {cardOptions.map((options) => {
                const radio = getRadioProps({ value: options.value });

                return (
                  <CardRadio
                    key={options.name}
                    optionIcon={options.icon}
                    optionAmount={options.amount}
                    {...radio}
                  >
                    {options.name}
                  </CardRadio>
                );
              })}
            </SimpleGrid>
          </Box>
          <Box
            mt="5"
            p="10px"
            backgroundColor="rightLayout.switcher"
            borderRadius="md"
          >
            <FormControl
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <FormLabel
                htmlFor="email-alerts"
                mb="0"
                color={`${
                  amounts
                    ? "rightLayout.primaryText"
                    : "rightLayout.secondaryText"
                }`}
              >
                Monthly
              </FormLabel>
              <Switch
                sx={{
                  "--switch-track-width": "2.1rem",
                  "--chakra-colors-gray-300": "hsl(213, 96%, 18%)",
                  "--chakra-colors-blue-500": "hsl(213, 96%, 18%)",
                }}
                id="email-alerts"
                onChange={() =>
                  setAmounts((prevAmount) => (prevAmount ? false : true))
                }
              />
              <FormLabel
                htmlFor="email-alerts"
                ml="5"
                mb="0"
                color={`${
                  amounts
                    ? "rightLayout.secondaryText"
                    : "rightLayout.primaryText"
                }`}
              >
                Yearly
              </FormLabel>
            </FormControl>
          </Box>
        </Box>
        <Box
          w="100%"
          bg={{ base: "white", md: "" }}
          position={{ base: "absolute", md: "unset" }}
          bottom={{ base: "0", md: "" }}
          padding={{ base: "15px", md: "" }}
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Box>
            <Link
              color="rightLayout.backColor"
              _hover={{ color: "rightLayout.primaryText" }}
              onClick={() => navigate("/")}
            >
              Go Back
            </Link>
          </Box>
          <Flex
            pl={{ base: "", md: "60%" }}
            justifyContent={{ base: "flex-end", md: "" }}
          >
            <Button
              type="submit"
              backgroundColor="rightLayout.primaryText"
              colorScheme="purple"
              fontWeight="500"
            >
              Next Step
            </Button>
          </Flex>
        </Box>
      </VStack>
    </form>
  );
};
