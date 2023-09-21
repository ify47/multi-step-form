import {
  useRadio,
  Card,
  CardHeader,
  CardBody,
  VStack,
  Image,
  Text,
  RadioProps,
} from "@chakra-ui/react";

type CardRadioProps = RadioProps & {
  optionIcon: string;
  optionAmount: string;
  children: React.ReactNode;
};

// 1. Create a component that consumes the `useRadio` hook
export function CardRadio(props: CardRadioProps) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Card
      as="label"
      h={{ base: "86px", md: "174px" }}
      direction={{ base: "row", md: "column" }}
      justifyContent={{ base: "flex-start", md: "space-evenly" }}
      cursor="pointer"
      _checked={{ border: "1px solid black", bg: "rightLayout.switcher" }}
      {...checkbox}
    >
      <input {...input} />
      <CardHeader
        pt="20px"
        pl={{ base: "19px", md: "" }}
        pr={{ base: "0", md: "" }}
      >
        <Image src={props.optionIcon} alt="arcade" />
      </CardHeader>
      <CardBody pt="18px" flex="0">
        <VStack gap="0" align="flex-start">
          <Text fontSize="lg" as="b" color="rightLayout.primaryText">
            {props.children}
          </Text>
          <Text fontSize="sm" color="rightLayout.secondaryText">
            {props.optionAmount}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
}
