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
  Link,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import { AnimateChild } from "components/animation";
import { easeProps } from "components/animation/variants";
import { MotionBox } from "../../components/motion";

import { REAL_EMAIL, RESUME_LINK } from "../../constants";
import { animatedParent } from "../../components/animation/variants";

const CIRCLE_VARIANTS = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.333, ease: easeProps, delay: 0.9 },
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
  const borderColor = useColorModeValue("gray.200", "gray.500");
  const purpleCircle = useColorModeValue("purple.100", "purple.700");
  const blueHighlight = useColorModeValue("blue.500", "blue.300");
  const pinkHighlight = useColorModeValue("pink.500", "pink.300");

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  const companyName = companyItem?.company ? (
    <chakra.span textTransform="capitalize"> {companyItem.company}</chakra.span>
  ) : (
    ""
  );

  return (
    <MotionBox
      bgGradient={`linear(to-r,${blueGradient}, ${purpleGradient})`}
      ref={ref}
      variants={animatedParent}
      initial="initial"
      animate={inView ? "enter" : "initial"}
      exit="initial"
      overflow="hidden"
    >
      <Container maxWidth="container.lg">
        <Box h="3.5rem" />
        <Grid
          templateColumns="repeat(12, 1fr)"
          alignItems="center"
          minH="75vh"
          gap={[0, 4, 8]}
        >
          <GridItem
            colSpan={[12, 12, 7]}
            mt={isSmallScreen ? 16 : 0}
            pb={[8, 4, 0]}
          >
            <Stack spacing={8}>
              <AnimateChild>
                <Heading as="h1" size="lg">
                  Hey{companyName}! My name is Justin Zhang and I&apos;m seeking{" "}
                  <chakra.span color={blueHighlight}>
                    Product Management internships
                  </chakra.span>{" "}
                  for{" "}
                  <chakra.span color={pinkHighlight}>Summer 2022</chakra.span>
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
          <GridItem
            colSpan={[12, 12, 5]}
            position="relative"
            p={[0, 2, 12]}
            pb={[4, 4, 0]}
          >
            <AnimateChild>
              <AspectRatio ratio={9 / 16}>
                <Box
                  w="90%"
                  borderRadius="xl"
                  className="adaptive-glass"
                  borderColor={borderColor}
                  borderWidth="5px"
                  zIndex={9999}
                >
                  {/* <Stack textAlign="center">
                    <Image
                      src="/static/memoji-peace.png"
                      alt="Memoji representation of Justin Zhang putting two fingers up in a v-shape"
                      width="200rem"
                      height="200rem"
                    />
                    <Text>Video coming soon</Text>
                  </Stack> */}
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/qRtxzKQm0QM?playlist=qRtxzKQm0QM&loop=1&modestbranding=1&controls=1&playsinline=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    height="100%"
                    width="100%"
                  ></iframe>
                </Box>
              </AspectRatio>
            </AnimateChild>
            <MotionBox variants={CIRCLE_VARIANTS}>
              <Circle
                size="30vh"
                bg={purpleCircle}
                position="absolute"
                bottom="-20"
                right="-50"
                zIndex={0}
              />
            </MotionBox>
          </GridItem>
        </Grid>
      </Container>
    </MotionBox>
  );
};
