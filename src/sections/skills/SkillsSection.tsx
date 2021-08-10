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

import { TextStack } from "../../components/text-animations";

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
              <SkillsSnippet
                title="Languages - The Technical Kind :)"
                body="Javascript (Typescript), Java, Python, SQL"
              />
              <SkillsSnippet
                title="Product"
                body="User interviews, Product requirement docs, Writing user stories, Market analysis, Prioritization, Being helpful!"
              />
              <SkillsSnippet
                title="Frameworks and Technical"
                body="Node.js, React.js, Next.js, GraphQL, MongoDB, AWS (EC2, S3, Lambda, Cognito, Cloudfront)"
              />
              <SkillsSnippet
                title="Software Tools"
                body="Figma, Jira, Datadog, Adobe CC (Premiere, After Effects, Lightroom), Googling"
              />
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
