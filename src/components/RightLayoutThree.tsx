import {
  Heading,
  Box,
  Text,
  SimpleGrid,
  Button,
  Flex,
  VStack,
  Link,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormikControl } from "./forms/FormikControl";
import { getCheckBoxOptions } from "./Datas";

export const RightLayoutThree = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data2 } = location.state;

  const checkBoxOptions = getCheckBoxOptions(data2);

  const initialValue = {
    checkBoxOption: [] as string[],
  };

  const validationSchema = Yup.object({
    checkBoxOption: Yup.array().min(1, "At least one checkbox is required"),
  });

  const onSubmit = (values: typeof initialValue) => {
    const selectedOptions = checkBoxOptions
      .filter((option) => values.checkBoxOption.includes(option.primaryLabel))
      .map((option) => ({
        primaryLabel: option.primaryLabel,
        amount: option.amount,
        amountNum: option.amountNum,
      }));

    navigate("/step-four", {
      state: { ...location.state, data3: selectedOptions },
    });
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <VStack
            gap={{ base: "", md: "4.1rem" }}
            pl={{ base: "0", md: "50px" }}
          >
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
                <SimpleGrid spacing={4} gap="20px">
                  <CheckboxGroup>
                    <FormikControl
                      control="checkbox"
                      name="checkBoxOption"
                      options={checkBoxOptions}
                    />
                  </CheckboxGroup>
                </SimpleGrid>
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
                  onClick={() => navigate(-1)}
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
                  disabled={!formik.isValid}
                  backgroundColor="rightLayout.primaryText"
                  colorScheme="purple"
                  fontWeight="500"
                >
                  Next Step
                </Button>
              </Flex>
            </Box>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
