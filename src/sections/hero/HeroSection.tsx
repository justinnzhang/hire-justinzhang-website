import {
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
  Container,
  Circle,
  Link,
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
import { animatedParent } from "../../components/animation/variants";

import Image from "next/image";

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
  const purpleCircle = useColorModeValue("purple.100", "purple.700");
  const blueHighlight = useColorModeValue("blue.500", "blue.300");

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
        <Grid
          templateColumns="repeat(12, 1fr)"
          minH="55vh"
          gap={[0, 4, 8]}
          paddingTop={["0rem", "3.5rem"]}
        >
          <GridItem
            colSpan={[12, 12, 7]}
            mt={isSmallScreen ? 16 : 0}
            pb={[8, 4, 0]}
            display="flex"
            alignItems="center"
            height="100%"
            zIndex={10}
          >
            <Stack spacing={8}>
              <AnimateChild>
                <Heading as="h1" size="lg">
                  Hey{companyName}! My name is Justin Zhang and I&apos;m a{" "}
                  <chakra.span color={blueHighlight}>
                    Product Software Engineer
                  </chakra.span>{" "}
                </Heading>
              </AnimateChild>
              <AnimateChild>
                <Text colorScheme="gray" fontSize="lg">
                  Combining software, business, and design to create meaningful
                  products and experiences
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
            display="flex"
            alignItems="center"
            height="100%"
            minHeight={["30vh", "30vh", "50vh"]}
          >
            <Image
              src="/static/memoji-hero.png"
              alt="Memoji representation of Justin Zhang waving"
              height={300}
              width={300}
              style={{
                zIndex: 1,
                position: "absolute",
                bottom: "0",
                right: "0",
              }}
              priority
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw"
            />
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
