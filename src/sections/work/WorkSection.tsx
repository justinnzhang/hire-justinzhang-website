import { Container, Box, Center, SimpleGrid } from "@chakra-ui/layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";

import { useInView } from "react-intersection-observer";

import { WorkCard } from "./components";
import { MotionBox } from "../../components/motion";
import { TextRow } from "components/text-animations";
import { AnimateChild } from "components/animation/StaggeredAnimation";
import { easeProps } from "components/animation/variants";

import content from "./content/all.content.json";

const WORK_TYPES = ["current", "work", "ec"];

function filteredContent(searchTag: string) {
  return content.filter((el) => el.tags.includes(searchTag));
}

export const WorkSection = () => {
  const [ref, inView] = useInView({
    rootMargin: `-350px 0px`,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    rootMargin: `-350px 0px`,
    triggerOnce: true,
  });

  return (
    <Box w="full" overflow="hidden">
      <Container maxW="container.lg" pt={16} pb={16} position="relative">
        <Center w="100%" pb={16}>
          <TextRow lines={4} word="WHAT I DO" />
        </Center>
        <Tabs variant="soft-rounded" colorScheme="blue" isLazy defaultIndex={0}>
          <MotionBox
            ref={ref2}
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
            animate={inView2 ? "enter" : "initial"}
            exit="initial"
          >
            <AnimateChild>
              <TabList>
                <Tab>Current</Tab>
                <Tab>Work</Tab>
                <Tab>Leadership</Tab>
              </TabList>
            </AnimateChild>
          </MotionBox>
          <TabPanels>
            {WORK_TYPES.map((el) => (
              <TabPanel p={0} pt={8} key={`${el}-tabPanel`}>
                <MotionBox
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
                        staggerChildren: 0.1,
                        when: "beforeChildren",
                      },
                    },
                  }}
                  initial="initial"
                  animate={inView ? "enter" : "initial"}
                  exit="initial"
                >
                  <SimpleGrid columns={[1, null, 2]} spacing={8}>
                    {filteredContent(el).map((item, index) => (
                      <WorkCard item={item} key={`${el}-${index}`} />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};
