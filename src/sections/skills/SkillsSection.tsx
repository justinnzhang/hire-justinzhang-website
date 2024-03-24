import {
  Box,
  Container,
  Text,
  Stack,
  Grid,
  GridItem,
  Center,
  Badge,
} from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Image from "next/image";

import { TextStack } from "../../components/text-animations";
import { ContentGenerator } from "components/text-section";

import content from "./content.json";

interface SkillsSnippetProps {
  title: string;
  body: string;
}

const SkillsSnippet = ({ title, body }: SkillsSnippetProps) => {
  const BodyText = useColorModeValue("gray.600", "gray.300");

  return (
    <Stack>
      <Badge w="fit-content">{title}</Badge>
      <Text color={BodyText}>{body}</Text>
    </Stack>
  );
};

export const SkillsSection = () => {
  const HighlightText = useColorModeValue("blue.500", "blue.300");

  return (
    <Box>
      <Container maxW="container.lg">
        <Center p={16}>
          <Image
            src="/static/memoji-laptop.png"
            alt="Memoji representation of Justin Zhang smiling"
            width={200}
            height={200}
          />
        </Center>
        <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems="center">
          <GridItem colSpan={[12, 6, 5]} mb={4}>
            <TextStack word="MY SKILLS" lines={2} />
          </GridItem>
          <GridItem colSpan={[12, 6, 6]}>
            <Stack spacing={8}>
              <ContentGenerator content={content} name="skills-section" />
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
