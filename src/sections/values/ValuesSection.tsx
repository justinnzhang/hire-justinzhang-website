import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Image from "next/image";

import { TextStack } from "../../components/text-animations";

export const ValuesSection = () => {
  const BodyText = useColorModeValue("gray.600", "gray.300");
  const HighlightText = useColorModeValue("blue.500", "blue.300");

  return (
    <Box>
      <Container maxW="container.lg">
        <Center p={16}>
          <Image
            src="/static/memoji-thinking.png"
            alt="Memoji representation of Justin Zhang on a laptop"
            width="200rem"
            height="200rem"
          />
        </Center>
        <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems="center">
          <GridItem colSpan={[12, 6, 5]} mb={4}>
            <TextStack word="MY VALUES" lines={2} />
          </GridItem>
          <GridItem colSpan={[12, 6, 6]}>
            <Stack spacing={4}>
              <Heading size="lg">
                Curiousity and passion, always trying new things,{" "}
                <chakra.span color={HighlightText}>
                  and learning through doing
                </chakra.span>
              </Heading>
              <Text color={BodyText}>
                I&apos;m a firm believer in experimentation and exploring new
                things, taking on new challenges while applying creative
                thinking
              </Text>
              <Text color={BodyText}>
                Impact and mentorship are also things that I care about, whether
                that&apos;s learning from others or passing on my experiences -
                at the end of the day, I want to leave a positive impact in any
                way I can
              </Text>
              <Text fontWeight="medium" color={HighlightText}>
                I&apos;m still very early in my career and have a lot to
                understand - hence I heavily value personal and professional
                growth above all else!
              </Text>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
