import {
  Box,
  Container,
  Stack,
  Flex,
  Spacer,
  Heading,
  Text,
  Center,
} from "@chakra-ui/layout";
import { VisuallyHidden } from "@chakra-ui/visually-hidden";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Switch } from "@chakra-ui/switch";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/media-query";

import { MotionHeading } from "../../components/motion";

import { easeProps } from "../../components/animation/variants";

interface Props {
  setIsTLDR: any;
  isTLDR: boolean;
}

export const TLDRSection = ({ setIsTLDR, isTLDR }: Props) => {
  const BodyText = useColorModeValue("gray.500", "gray.400");
  const CardBg = useColorModeValue("gray.100", "gray.700");
  const CardGradientStop = useColorModeValue("green.100", "green.700");

  const isLarge = useBreakpointValue({ base: true, xs: false, sm: false });

  return (
    <Container maxW="container.lg" pt={16}>
      <Box
        borderRadius="md"
        p={8}
        overflow="hidden"
        animate="0.333s all"
        bgGradient={`linear(to-l, ${
          isTLDR ? CardGradientStop : CardBg
        } 0%,  ${CardBg} 50%)`}
      >
        <Flex>
          <Flex maxW="20rem">
            <Stack spacing={2}>
              <FormControl display="flex" alignItems="center" mb={4}>
                <Switch
                  id="tldr-toggle"
                  onChange={setIsTLDR.toggle}
                  isChecked={isTLDR}
                />
                <VisuallyHidden>
                  <FormLabel
                    htmlFor="tldr-toggle"
                    mb="0"
                    ml={4}
                    color={isTLDR ? "green.500" : "gray.400"}
                  >
                    TLDR: {isTLDR ? "ON" : "OFF"}
                  </FormLabel>
                </VisuallyHidden>
              </FormControl>
              <Heading as="h3" size="md">
                TLDR Mode
              </Heading>
              <Text size="md" color={BodyText}>
                Skip the fluff and condense the site into a skimmable page
              </Text>
            </Stack>
          </Flex>
          {!isLarge && (
            <Flex width="100%">
              <Center width="full" position="relative">
                <MotionHeading
                  as="h5"
                  color="gray.400"
                  variants={{
                    initial: {
                      opacity: 0,
                      translateY: 100,
                    },
                    enter: {
                      opacity: 1,
                      translateY: 0,
                      transition: {
                        duration: 0.1,
                        ease: easeProps,
                      },
                    },
                  }}
                  animate={isTLDR ? "initial" : "enter"}
                  position="absolute"
                >
                  TLDR: OFF
                </MotionHeading>
                <MotionHeading
                  as="h5"
                  color="green.500"
                  variants={{
                    initial: {
                      opacity: 0,
                      translateY: -100,
                    },
                    enter: {
                      opacity: 1,
                      translateY: 0,
                      transition: {
                        duration: 0.1,
                        ease: easeProps,
                      },
                    },
                  }}
                  initial="initial"
                  animate={isTLDR ? "enter" : "initial"}
                  exit="initial"
                  position="absolute"
                >
                  TLDR: ON
                </MotionHeading>
              </Center>
            </Flex>
          )}
        </Flex>
      </Box>
    </Container>
  );
};
