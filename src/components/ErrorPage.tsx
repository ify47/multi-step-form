import { Heading, Image } from "@chakra-ui/react";
import error from "../assets/error-page.png";
export const ErrorPage = () => {
  return (
    <>
      <Heading>Page Not Found</Heading>
      <Image src={error} alt="Errors page" />
    </>
  );
};
