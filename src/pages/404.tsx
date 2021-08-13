import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorMode,
  Container,
  Stack,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";

const Page404 = () => {
  return (
    <Container maxW="container.lg" pt="4rem">
      <Center h="100%" minH="75vh">
        <Stack w="100%">
          <Image src="/404-image.svg" alt="Error 404 not found Illustration" />
          <Box pb={16}>
            <Stack spacing={4}>
              <Heading>Page not found.</Heading>
              <Text>This site only has one page!</Text>
              <Link href="/" passHref>
                <Button w="fit-content" colorScheme="blue">
                  Back home
                </Button>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};

export default Page404;
