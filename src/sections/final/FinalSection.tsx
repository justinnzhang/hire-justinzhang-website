import { Container, Grid, GridItem, Stack, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useInView } from "react-intersection-observer";

import { FunFacts } from "components/fun-facts";
import { AnimateChild } from "components/animation";
import { MotionBox } from "components/motion";
import { ContentGenerator } from "components/text-section";
import { animatedParentShort } from "components/animation/variants";

import { REAL_EMAIL, RESUME_LINK } from "../../constants";
import content from "./content.json";

interface Props {
  companyItem?: SiteOption;
}

export const FinalSection = ({ companyItem }: Props) => {
  const [ref, inView] = useInView({
    rootMargin: `-250px 0px`,
    triggerOnce: true,
  });

  return (
    <MotionBox
      ref={ref}
      variants={animatedParentShort}
      initial="initial"
      animate={inView ? "enter" : "initial"}
      exit="initial"
    >
      <Container maxW="container.lg" pb={16} position="relative">
        <Grid
          templateColumns="repeat(12, 1fr)"
          gap={[0, 0, 8]}
          alignItems="center"
        >
          <GridItem colSpan={[12, 12, 6]} pb={[8, 4, 0]}>
            <Stack spacing={4}>
              <ContentGenerator
                content={content}
                name="final-section"
                isAnimated={true}
              />
              <AnimateChild>
                <Stack direction="row" spacing={4} pt={4}>
                  <Button
                    colorScheme="blue"
                    w="fit-content"
                    as={Link}
                    href={`mailto:${REAL_EMAIL}`}
                    isExternal
                  >
                    Let&apos;s get in touch!
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
          <GridItem colSpan={[12, 12, 6]} w="100%" h="100%">
            <AnimateChild>
              <FunFacts />
            </AnimateChild>
          </GridItem>
        </Grid>
      </Container>
    </MotionBox>
  );
};
