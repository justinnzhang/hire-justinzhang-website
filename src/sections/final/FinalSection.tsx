import { Container, Grid, GridItem, Stack, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { FunFacts } from "components/fun-facts";

import { AnimateParent, AnimateChild } from "components/animation";
import { ContentGenerator } from "components/text-section";

import content from "./content.json";

export const FinalSection = () => {
  return (
    <AnimateParent stagger={0.05} rX="-100px">
      <Container maxW="container.lg" pb={16} position="relative">
        <Grid templateColumns="repeat(12, 1fr)" gap={8} alignItems="center">
          <GridItem colSpan={[12, 12, 6]}>
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
                    href="mailto:hirejustinzhang@gmail.com"
                    isExternal
                  >
                    Let&apos;s get in touch!
                  </Button>
                  <Button
                    w="fit-content"
                    as={Link}
                    href="mailto:hirejustinzhang@gmail.com"
                    isExternal
                    variant="ghost"
                  >
                    PDF Resume
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
