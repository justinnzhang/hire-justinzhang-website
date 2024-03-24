import { ReactNode, useRef } from "react";

import { Container, Box, Center } from "@chakra-ui/layout";

import { useInView } from "react-intersection-observer";
import useDraggableScroll from "use-draggable-scroll";

import { WorkCard } from "./components";
import { MotionBox } from "../../components/motion";
import { TextRow } from "components/text-animations";
import { easeProps } from "components/animation/variants";

import content from "./content.json";
import { useBreakpointValue, useColorMode } from "@chakra-ui/react";

const PARENT_ANIMATION_VARIANTS = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: easeProps,
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
};

const CardGrid = ({ children }: { children: ReactNode }) => {
  const dragRef = useRef(null);
  const { onMouseDown } = useDraggableScroll(dragRef);

  return (
    <Box
      className="horizontal-scroll"
      ref={dragRef}
      onMouseDown={onMouseDown}
      px={[2, 8]}
      overflowX="scroll"
      position="relative"
    >
      {children}
    </Box>
  );
};

export const WorkSection = () => {
  const [ref, inView] = useInView({
    rootMargin: `-350px 0px`,
    triggerOnce: true,
  });

  const fadeWidth = useBreakpointValue({
    base: "5vw",
    md: "70px",
  });

  const isLightMode = useColorMode().colorMode === "light";

  const lightTransparent = "rgba(255, 255, 255, 0.00)";
  const lightFull = "rgba(255, 255, 255, 1.00)";
  const darkTransparent = "rgba(26, 32, 44, 0.00)";
  const darkFull = "rgba(26, 32, 44, 1.00)";

  const full = isLightMode ? lightFull : darkFull;
  const transparent = isLightMode ? lightTransparent : darkTransparent;

  return (
    <Box
      w="full"
      overflow="hidden"
      pb={16}
      position="relative"
      _before={{
        content: '""',
        display: "block",
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "white",
        width: fadeWidth,
        height: "100%",
        background: `linear-gradient(90deg, ${full} 0%, ${transparent} 100%)`,
        zIndex: 10,
      }}
      _after={{
        content: '""',
        display: "block",
        position: "absolute",
        right: 0,
        top: 0,
        backgroundColor: "white",
        width: fadeWidth,
        height: "100%",
        background: `linear-gradient(90deg, ${transparent}, ${full} 100%)`,
        zIndex: 10,
      }}
    >
      <Container maxW="container.lg" pt={16} position="relative">
        <Center w="100%" pb={[8, 16]}>
          <TextRow lines={4} word="WHAT I DO" />
        </Center>
      </Container>
      <MotionBox
        ref={ref}
        variants={PARENT_ANIMATION_VARIANTS}
        initial="initial"
        animate={inView ? "enter" : "initial"}
        exit="initial"
      >
        <CardGrid>
          {content.map((item) => (
            <WorkCard item={item} key={`${item.imageKey}`} />
          ))}
        </CardGrid>
      </MotionBox>
    </Box>
  );
};
