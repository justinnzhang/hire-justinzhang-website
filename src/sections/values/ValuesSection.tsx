import {
  Box,
  Container,
  Stack,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/layout";
import Image from "next/image";

import { TextStack } from "../../components/text-animations";
import { ContentGenerator } from "components/text-section";
import content from "./content.json";

export const ValuesSection = () => {
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
              <ContentGenerator content={content} name="values-section" />
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
