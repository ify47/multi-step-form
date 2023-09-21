import { Heading, Box, Text, Button, Flex, VStack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "./forms/FormikControl";
import { useNavigate } from "react-router-dom";

export const RightLayout = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    Pnumber: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid Email Address")
      .required("This field is required"),
    Pnumber: Yup.string().required("This field is required"),
  });

  const onSubmit = (values: typeof initialValues) => {
    navigate("/step-two", { state: { data1: values } });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <VStack gap={{ base: "", md: "4.2rem" }}>
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
                Personal Info
              </Heading>
              <Text fontSize="md" pb="25px" color="rightLayout.secondaryText">
                Please provide your name, email address, and phone number.
              </Text>
              <Box>
                <FormikControl
                  control="input"
                  type="text"
                  label="Name"
                  name="name"
                  placeholder="e.g. Stephen King"
                />
                <FormikControl
                  control="input"
                  type="email"
                  label="Email Address"
                  name="email"
                  placeholder="e.g. stephenking@lorem.com"
                />
                <FormikControl
                  control="input"
                  type="number"
                  label="Phone Number"
                  name="Pnumber"
                  placeholder="e.g. +1 234 567 890"
                />
              </Box>
            </Box>
            <Box
              w="100%"
              bg={{ base: "white", md: "" }}
              position={{ base: "absolute", md: "unset" }}
              bottom={{ base: "0", md: "" }}
              padding={{ base: "15px", md: "" }}
            >
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
