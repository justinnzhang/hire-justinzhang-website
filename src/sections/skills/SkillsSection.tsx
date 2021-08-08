import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  Center,
  Badge,
} from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Image from "next/image";

import { TextStack } from "../who/TextStack";

const SkillSection = ({ title, body }) => {
  const BodyText = useColorModeValue("gray.600", "gray.400");

  return (
    <Stack>
      <Badge w="fit-content">{title}</Badge>
      <Text color={BodyText}>{body}</Text>
    </Stack>
  );
};

export const SkillsSection = () => {
  const BodyText = useColorModeValue("gray.600", "gray.400");
  const HighlightText = useColorModeValue("blue.500", "blue.300");

  return (
    <Box>
      <Container maxW="container.lg">
        <Center p={16}>
          <Image
            src="/static/memoji-laptop.png"
            alt="Memoji representation of Justin Zhang smiling"
            width="200rem"
            height="200rem"
          />
        </Center>
        <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems="center">
          <GridItem colSpan={[12, 6, 5]} mb={4}>
            <TextStack word="MY SKILLS" lines={2} />
          </GridItem>
          <GridItem colSpan={[12, 6, 6]}>
            <Stack spacing={8}>
              <Heading size="lg">
                Design driven, customer obsessed,{" "}
                <chakra.span color={HighlightText}>
                  and long-term focused
                </chakra.span>
              </Heading>

              <SkillSection
                title="Technical Languages"
                body="Javascript (Typescript), Java, Python, SQL"
              />
              <SkillSection
                title="Frameworks and Tools"
                body="React.js, Next.js, "
              />

              <Badge w="fit-content">Technical</Badge>
              <Text color={BodyText}>
                Making things a reality is my passion; whether that’s in
                videography, software development, or even dreaming up new
                business ideas
              </Text>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
