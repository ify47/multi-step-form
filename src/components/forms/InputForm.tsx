import {
  FormControl,
  Flex,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Field } from "formik";

export type InputProps = {
  label: string;
  name: string;
};
// Define the type for the form object
type FormikForm = {
  errors: Record<string, string>;
  touched: Record<string, boolean>;
};

export const InputForm = (props: InputProps) => {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }: { field: any; form: FormikForm }) => {
        return (
          <FormControl
            pb="5"
            color="rightLayout.primaryText"
            isInvalid={!!form.errors[name] && form.touched[name]}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <FormLabel htmlFor={name} mb="1">
                {label}
              </FormLabel>

              <FormErrorMessage pb="11px" fontWeight="500">
                {form.errors[name]}
              </FormErrorMessage>
            </Flex>

            <Input
              id={name}
              _placeholder={{ color: "rightLayout.placeholderText" }}
              {...rest}
              {...field}
            />
          </FormControl>
        );
      }}
    </Field>
  );
};
