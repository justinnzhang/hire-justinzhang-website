import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  Center,
  Flex,
} from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Image from "next/image";

import { TextStack } from "../../components/text-animations";

export const WhoSection = () => {
  const BodyText = useColorModeValue("gray.600", "gray.400");
  const HighlightText = useColorModeValue("blue.500", "blue.300");

  return (
    <Box>
      <Container maxW="container.lg">
        <Center p={16}>
          <Image
            src="/static/memoji-smiling.png"
            alt="Memoji representation of Justin Zhang smiling"
            width="200rem"
            height="200rem"
          />
        </Center>
        <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems="center">
          <GridItem colSpan={[12, 6, 5]} mb={4}>
            <TextStack word="WHO AM I?" lines={2} />
          </GridItem>
          <GridItem colSpan={[12, 6, 6]}>
            <Stack spacing={4}>
              <Heading size="lg">
                A Computer Science and Business student{" "}
                <chakra.span color={HighlightText}>
                  with a background in Design
                </chakra.span>
              </Heading>
              <Text color={BodyText}>
                I started out in Film Studies before transitioning into my
                current program - driven by a curiousity of building products as
                a whole
              </Text>
              <Text color={BodyText}>
                Making things a reality is my passion; whether that’s in
                videography, software development, or even dreaming up new
                business ideas
              </Text>
              <Text fontWeight="medium" color={HighlightText}>
                That’s why I’m interested in Product Management, a way for me to
                build things across engineering, business, and design
              </Text>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
