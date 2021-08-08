import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
  Container,
  AspectRatio,
  Flex,
  Spacer,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Image from "next/image";

import { ThemeToggle } from "../../components/layout/ThemeToggle";
import { AnimateParent, AnimateChild } from "components/animation";

export const HeroSection = () => {
  const blueGradient = useColorModeValue("blue.100", "blue.800");
  const purpleGradient = useColorModeValue("purple.200", "purple.800");

  return (
    <Box
      w="full"
      transition="0.333s bgGradient"
      bgGradient={`linear(to-r,${blueGradient}, ${purpleGradient})`}
    >
      <Container maxWidth="container.lg">
        <Flex pt={4} alignItems="center">
          <Box>
            <Image
              src="/static/memoji-smiling.png"
              alt="Apple memoji of Justin Zhang"
              width={50}
              height={50}
            />
          </Box>
          <Spacer />
          <ThemeToggle />
        </Flex>
        <Grid
          templateColumns="repeat(12, 1fr)"
          gap={6}
          alignItems="center"
          h="90vh"
        >
          <GridItem colSpan={[12, 12, 7]}>
            <Stack spacing={8}>
              <Heading as="h1" size="lg">
                Hi! My name is Justin Zhang and I&apos;m seeking{" "}
                <chakra.span color="blue.500">
                  Product Management internships
                </chakra.span>{" "}
                for <chakra.span color="pink.500">Summer 2022</chakra.span>
              </Heading>

              <Text colorScheme="gray">
                Also interested in Software Engineering roles (Web/Front-end)!
              </Text>

              <Stack direction="row">
                <Button colorScheme="blue">Let&apos;s chat!</Button>
                <Button variant="ghost">PDF Resume</Button>
              </Stack>
            </Stack>
          </GridItem>
          <GridItem colSpan={[12, 12, 5]}>
            <AspectRatio ratio={9 / 16}>
              <Box bg="blue.200" h="full" w="full">
                <p>Hello</p>
              </Box>
            </AspectRatio>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
