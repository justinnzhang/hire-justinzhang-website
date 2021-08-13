import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
  Container,
  AspectRatio,
  Circle,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useInView } from "react-intersection-observer";

import { AnimateChild } from "components/animation";
import { easeProps } from "components/animation/variants";
import { MotionBox } from "../../components/motion";

import { REAL_EMAIL, RESUME_LINK } from "../../constants";
import { Link } from "@chakra-ui/react";

const PARENT_VARIANTS = {
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
};

interface Props {
  companyItem?: SiteOption;
}

export const HeroSection = ({ companyItem }: Props) => {
  const [ref, inView] = useInView({
    rootMargin: `-250px 0px`,
    triggerOnce: true,
  });

  const blueGradient = useColorModeValue("blue.100", "blue.800");
  const purpleGradient = useColorModeValue("purple.200", "purple.800");
  const purpleCircle = useColorModeValue("purple.100", "purple.700");

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <MotionBox
      bgGradient={`linear(to-r,${blueGradient}, ${purpleGradient})`}
      ref={ref}
      variants={PARENT_VARIANTS}
      initial="initial"
      animate={inView ? "enter" : "initial"}
      exit="initial"
      overflow="hidden"
    >
      <Container maxWidth="container.lg">
        <Box h="3.5rem" />
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
                  Hey
                  {companyItem ? (
                    <chakra.span textTransform="capitalize">
                      {" "}
                      {companyItem.company}
                    </chakra.span>
                  ) : null}
                  ! My name is Justin Zhang and I&apos;m seeking{" "}
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
                <Stack direction="row" spacing={4}>
                  <Button
                    colorScheme="blue"
                    href={`mailto:${REAL_EMAIL}`}
                    as={Link}
                  >
                    Let&apos;s chat!
                  </Button>
                  <Button
                    variant="ghost"
                    as={Link}
                    isExternal
                    href={companyItem?.resumeLink || RESUME_LINK}
                  >
                    {companyItem?.resumeLink ? "Themed" : "PDF"} Resume
                  </Button>
                </Stack>
              </AnimateChild>
            </Stack>
          </GridItem>
          <GridItem colSpan={[12, 12, 5]} position="relative">
            <AnimateChild>
              <AspectRatio ratio={9 / 16}>
                <Box bg="blue.200" w="90%" borderRadius="lg" zIndex={9999}>
                  <p>Hello</p>
                </Box>
              </AspectRatio>
            </AnimateChild>
            <Circle
              size="30vh"
              bg={purpleCircle}
              position="absolute"
              bottom="-20"
              right="-40"
              zIndex={0}
            />
          </GridItem>
        </Grid>
      </Container>
    </MotionBox>
  );
};
