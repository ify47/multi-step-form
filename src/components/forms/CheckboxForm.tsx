import {
  Card,
  CardBody,
  VStack,
  Flex,
  Checkbox,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

type CheckBoxArrayProps = {
  key: string;
  primaryLabel: string;
  secondaryLabel: string;
  amount: string;
};

export type CheckBoxProps = {
  name: string;
  options: Array<CheckBoxArrayProps>;
};

type OptionProps = {
  amount: string;
  key: string;
  primaryLabel: string;
  secondaryLabel: string;
};

type FieldProps = {
  value: string[];
};

export const CheckboxForm = (props: CheckBoxProps) => {
  const [isMobile] = useMediaQuery("(max-width: 568px)");
  const { name, options, ...rest } = props;

  return (
    <Field name={name} {...rest}>
      {({ field, form }: { field: FieldProps; form: any }) => {
        const hasError = form.errors[name] !== undefined;

        return options.map((option: OptionProps) => {
          const isChecked = field.value.includes(option.primaryLabel);
          return (
            <React.Fragment key={option.key}>
              <Card
                as="label"
                h={{ base: "86px", md: "80px" }}
                direction={{ base: "row", md: "column" }}
                justifyContent={{ base: "flex-start", md: "space-evenly" }}
                cursor="pointer"
                pl="20px"
                border={isChecked ? "1px solid" : ""}
                borderColor={isChecked ? "rightLayout.borderColor" : ""}
                bg={isChecked ? "rightLayout.switcher" : ""}
              >
                <Flex
                  alignItems="center"
                  pr="14px"
                  w={`${isMobile ? "63vh" : ""}`}
                  justifyContent={{ base: "space-between", md: "" }}
                >
                  <Checkbox
                    id={option.primaryLabel}
                    {...field}
                    value={option.primaryLabel}
                    w={`${isMobile ? "" : "50vh"}`}
                    isInvalid={hasError}
                  >
                    <CardBody p="6px" flex="0">
                      <VStack gap="0" align="flex-start">
                        <Text
                          fontSize="sm"
                          as="b"
                          color="rightLayout.primaryText"
                        >
                          {option.primaryLabel}
                        </Text>
                        <Text
                          fontWeight="500"
                          fontSize="2xs"
                          color="rightLayout.secondaryText"
                        >
                          {option.secondaryLabel}
                        </Text>
                      </VStack>
                    </CardBody>
                  </Checkbox>
                  <Text fontSize="xs" color="rightLayout.secondaryText">
                    {option.amount}
                  </Text>
                </Flex>
              </Card>
            </React.Fragment>
          );
        });
      }}
    </Field>
  );
};
