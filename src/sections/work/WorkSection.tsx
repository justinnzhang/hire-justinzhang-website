import { ReactNode, useRef } from "react";

import { Container, Box, Center, SimpleGrid } from "@chakra-ui/layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";
import { useBreakpointValue } from "@chakra-ui/media-query";

import { useInView } from "react-intersection-observer";
import useDraggableScroll from "use-draggable-scroll";

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

const CardGrid = ({
  children,
  isSmall,
}: {
  children: ReactNode;
  isSmall?: boolean;
}) => {
  const dragRef = useRef(null);
  const { onMouseDown } = useDraggableScroll(dragRef);

  if (isSmall) {
    return (
      <Box
        className="horizontal-scroll"
        ref={dragRef}
        onMouseDown={onMouseDown}
      >
        {children}
      </Box>
    );
  } else {
    return (
      <SimpleGrid columns={2} spacing={8} pr={4} pl={4}>
        {children}
      </SimpleGrid>
    );
  }
};

export const WorkSection = () => {
  const [ref, inView] = useInView({
    rootMargin: `-350px 0px`,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    rootMargin: `-350px 0px`,
    triggerOnce: true,
  });

  const isSmall = useBreakpointValue({ base: true, md: false });

  return (
    <Box w="full" overflow="hidden">
      <Container
        maxW="container.lg"
        pt={16}
        pb={16}
        pr={0}
        pl={0}
        position="relative"
      >
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
              <TabList pr={4} pl={4}>
                <Tab>Current</Tab>
                <Tab>Work</Tab>
                <Tab>Leadership</Tab>
              </TabList>
            </AnimateChild>
          </MotionBox>
          <TabPanels>
            {WORK_TYPES.map((el) => (
              <TabPanel pr={0} pl={0} pt={8} key={`${el}-tabPanel`}>
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
                  <CardGrid isSmall={isSmall}>
                    {filteredContent(el).map((item, index) => (
                      <WorkCard item={item} key={`${el}-${index}`} />
                    ))}
                  </CardGrid>
                </MotionBox>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};
