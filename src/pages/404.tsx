import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Image src="/404 Error-pana.svg" alt="Error 404 not found Illustration" />

      <Box marginY={4}>
        <Heading textAlign="center">Page not Found.</Heading>

        <Box textAlign="center" marginTop={4}>
          <Text>{"It's Okay!"}</Text>
          <Link href="/" passHref>
            <Button
              backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
            >
              {"Back home"}
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Page404;
