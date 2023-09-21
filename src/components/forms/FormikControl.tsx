import { CheckBoxProps, CheckboxForm } from "./CheckboxForm";
import { InputForm, InputProps } from "./InputForm";

type InputFormProps = InputProps & {
  type: string;
  placeholder: string;
};

type CheckBoxFormProps = CheckBoxProps & {
  name: string;
};

type FormikControlProps = {
  control: "input" | "checkbox";
};

export const FormikControl = (
  props: FormikControlProps & (InputFormProps | CheckBoxFormProps)
) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <InputForm {...(rest as InputFormProps)} />;
    case "checkbox":
      return <CheckboxForm {...(rest as CheckBoxFormProps)} />;
    default:
      return null;
  }
};
