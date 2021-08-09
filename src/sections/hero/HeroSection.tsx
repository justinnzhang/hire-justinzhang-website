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
  Link,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

import { ThemeToggle } from "../../components/layout/ThemeToggle";
import { AnimateChild } from "components/animation";
import { easeProps } from "components/animation/variants";
import { MotionBox } from "../../components/motion";

export const HeroSection = () => {
  const [ref, inView] = useInView({
    rootMargin: `-350px 0px`,
    triggerOnce: true,
  });

  const blueGradient = useColorModeValue("blue.100", "blue.800");
  const purpleGradient = useColorModeValue("purple.200", "purple.800");

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <MotionBox
      bgGradient={`linear(to-r,${blueGradient}, ${purpleGradient})`}
      ref={ref}
      variants={{
        initial: {
          opacity: 1,
        },
        enter: {
          opacity: 1,
          transition: {
            duration: 0.1,
            ease: easeProps,
            staggerChildren: 0.15,
            when: "beforeChildren",
          },
        },
      }}
      initial="initial"
      animate={inView ? "enter" : "initial"}
      exit="initial"
    >
      <Container maxWidth="container.lg">
        <Grid
          templateColumns="repeat(12, 1fr)"
          gap={6}
          alignItems="center"
          minH="75vh"
        >
          <GridItem colSpan={[12, 12, 7]} mt={isSmallScreen ? 16 : 0}>
            <Stack spacing={8}>
              <AnimateChild>
                <Heading as="h1" size="lg">
                  Hi! My name is Justin Zhang and I&apos;m seeking{" "}
                  <chakra.span color="blue.500">
                    Product Management internships
                  </chakra.span>{" "}
                  for <chakra.span color="pink.500">Summer 2022</chakra.span>
                </Heading>
              </AnimateChild>
              <AnimateChild>
                <Text colorScheme="gray">
                  Also interested in Software Engineering roles (Web/Front-end)!
                </Text>
              </AnimateChild>
              <AnimateChild>
                <Stack direction="row">
                  <Button colorScheme="blue">Let&apos;s chat!</Button>
                  <Button variant="ghost">PDF Resume</Button>
                </Stack>
              </AnimateChild>
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
    </MotionBox>
  );
};
