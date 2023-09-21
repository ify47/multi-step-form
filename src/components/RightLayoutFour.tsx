import {
  Heading,
  Box,
  Text,
  Button,
  Flex,
  VStack,
  Link,
  Card,
  CardBody,
  CardHeader,
  Stack,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

type DataProps = {
  primaryLabel: string;
  amount: string;
};

export const RightLayoutFour = () => {
  const [isMobile] = useMediaQuery("(max-width: 568px)");
  const navigate = useNavigate();
  const location = useLocation();

  const { data2, data3 } = location.state;
  const calculatedData3 = data3.reduce(
    (n: number, { amountNum }: { amountNum: number }) => n + amountNum,
    0
  );
  const totalAmount = calculatedData3 + data2.amountNumber;

  return (
    <VStack
      gap={`${isMobile ? "0" : "8rem"}`}
      pl={{ base: "0", md: "50px" }}
      pr={`${isMobile ? "" : "94px"}`}
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
          Finishing up
        </Heading>
        <Text fontSize="md" pb="25px" color="rightLayout.secondaryText">
          Double-check everything looks OK before confirming.
        </Text>
        <Card
          bg="rightLayout.switcher"
          sx={{ "--card-shadow": "0" }}
          mr={`${isMobile ? "" : "-74px"}`}
        >
          <CardBody pt="0">
            <Stack>
              <Flex justifyContent="space-between" alignItems="flex-end">
                <Box>
                  <CardHeader p="0" pt="20px">
                    <Heading
                      color="rightLayout.primaryText"
                      size="sm"
                      fontWeight="500"
                    >
                      {data2.name}({data2.cost})
                    </Heading>
                  </CardHeader>
                  <Box>
                    <ChakraLink
                      textDecoration="underline"
                      color="rightLayout.secondaryText"
                      fontSize="sm"
                      as={ReactRouterLink}
                      to="/step-two"
                    >
                      Change
                    </ChakraLink>
                  </Box>
                </Box>
                <Text
                  pb="10px"
                  fontSize="sm"
                  as="b"
                  color="rightLayout.primaryText"
                >
                  {data2.amount}
                </Text>
              </Flex>
              <Divider borderBottomWidth="2px" pt="10px" />
              {data3.map((data: DataProps) => {
                return (
                  <Flex justifyContent="space-between" key={data.primaryLabel}>
                    <Heading
                      size="xs"
                      pb="10px"
                      color="rightLayout.secondaryText"
                      fontWeight="100"
                    >
                      {data.primaryLabel}
                    </Heading>
                    <Text fontSize="xs" color="rightLayout.primaryText">
                      {data.amount}
                    </Text>
                  </Flex>
                );
              })}
            </Stack>
          </CardBody>
        </Card>
        <Flex
          justifyContent="space-between"
          pl="15px"
          mr={`${isMobile ? "23px" : "-53px"}`}
          pt="35px"
          alignItems="center"
        >
          <Heading size="xs" color="rightLayout.secondaryText" fontWeight="100">
            Total (per {data2.cost === "Monthly" ? "month" : "year"})
          </Heading>
          <Text fontSize="md" color="rightLayout.amountText" as="b">
            +${totalAmount}/{data2.cost === "Monthly" ? "mon" : "yr"}
          </Text>
        </Flex>
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
          pl={{ base: "", md: "50%" }}
          justifyContent={{ base: "flex-end", md: "" }}
          mr={`${isMobile ? "" : "-61px"}`}
        >
          <Button
            backgroundColor="rightLayout.primaryText"
            colorScheme="purple"
            fontWeight="500"
            onClick={() => navigate("/step-five", { replace: true })}
          >
            Confirm
          </Button>
        </Flex>
      </Box>
    </VStack>
  );
};
