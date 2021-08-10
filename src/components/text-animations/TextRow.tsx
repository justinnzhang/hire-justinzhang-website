import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { MotionHeading, MotionBox } from "../motion";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Stack } from "@chakra-ui/layout";

import { easeProps } from "../animation/variants";

const STAGGER_INTERVAL = 0.15;

interface AnimationParentProps {
  children: ReactNode;
  inView: boolean;
}

interface Props {
  word: string;
  lines: number;
}

export const TextRow = ({ word, lines }: Props) => {
  const [ref, inView] = useInView({
    rootMargin: `-300px 0px`,
    triggerOnce: true,
  });

  const TextFill = useColorModeValue("white", "gray.800");

  return (
    <MotionBox ref={ref}>
      <Stack direction="row" spacing={8}>
        {[...Array(lines)].map((el, index) => (
          <MotionHeading
            size="2xl"
            as="h4"
            key={`${index}-forward`}
            className="outline-text no-wrap"
            color={TextFill}
            variants={{
              initial: {
                opacity: 0,
                translateX: 20,
              },
              enter: {
                opacity: 1,
                translateX: 0,
                transition: {
                  duration: 0.333,
                  delay: STAGGER_INTERVAL * lines - index,
                  ease: easeProps,
                },
              },
            }}
            initial="initial"
            animate={inView ? "enter" : "initial"}
            exit="initial"
          >
            {word}
          </MotionHeading>
        ))}
        <MotionHeading
          size="2xl"
          as="h4"
          color="purple.500"
          variants={{
            initial: {
              opacity: 0,
            },
            enter: {
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: easeProps,
              },
            },
          }}
          initial="initial"
          animate={inView ? "enter" : "initial"}
          exit="initial"
          className="no-wrap"
        >
          {word}
        </MotionHeading>

        {[...Array(lines)].map((el, index) => (
          <MotionHeading
            size="2xl"
            as="h4"
            key={`${index}-backward`}
            color={TextFill}
            className="outline-text no-wrap"
            variants={{
              initial: {
                opacity: 0,
                translateX: -20,
              },
              enter: {
                opacity: 1,
                translateX: 0,
                transition: {
                  duration: 0.333,
                  delay: STAGGER_INTERVAL * index,
                  ease: easeProps,
                },
              },
            }}
            initial="initial"
            animate={inView ? "enter" : "initial"}
            exit="initial"
          >
            {word}
          </MotionHeading>
        ))}
      </Stack>
    </MotionBox>
  );
};
