import { Container, Grid, GridItem, Stack, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { AnimateParent, AnimateChild } from "components/animation";

import { FunFacts } from "components/fun-facts";
import { ContentGenerator } from "components/text-section";

import content from "./content.json";
import { RESUME_LINK, REAL_EMAIL } from "../../constants";

interface Props {
  companyItem?: SiteOption;
}

export const ShortSection = ({ companyItem }: Props) => {
  return (
    <AnimateParent stagger={0.05}>
      <Container maxW="container.lg" pt={16} pb={16} position="relative">
        <Grid templateColumns="repeat(12, 1fr)" gap={8} alignItems="center">
          <GridItem colSpan={[12, 12, 6]}>
            <Stack spacing={4}>
              <ContentGenerator
                content={content}
                name="short-section"
                isAnimated={true}
              />
              <AnimateChild>
                <Stack direction="row" pt={4}>
                  <Button
                    colorScheme="blue"
                    w="fit-content"
                    as={Link}
                    href={REAL_EMAIL}
                    isExternal
                  >
                    Let&apos;s get in touch!
                  </Button>
                  <Button
                    w="fit-content"
                    as={Link}
                    href={companyItem?.resumeLink || RESUME_LINK}
                    isExternal
                    variant="ghost"
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
    </AnimateParent>
  );
};
