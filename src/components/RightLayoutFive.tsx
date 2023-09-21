import {
  Heading,
  Text,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  VStack,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import thankYou from "../assets/icon-thank-you.svg";

export const RightLayoutFive = () => {
  const [isMobile] = useMediaQuery("(max-width: 568px)");
  return (
    <VStack gap="0" justifyContent="center">
      <Card
        w={`${isMobile ? "" : "90%"}`}
        maxW="600px"
        align="center"
        sx={{ "--card-shadow": "0" }}
        p={`${isMobile ? "3rem 1rem" : ""}`}
      >
        <Image src={thankYou} alt="Thank you icon" />
        <CardHeader>
          <Heading size="lg" color="rightLayout.primaryText">
            Thank you!
          </Heading>
        </CardHeader>
        <CardBody
          p={`${isMobile ? "0rem" : "0 2rem"}`}
          textAlign="center"
          color="rightLayout.secondaryText"
          fontSize={`${isMobile ? "md" : "sm"}`}
        >
          <Text>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </Text>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </VStack>
  );
};
