import { Container, Box, Center, SimpleGrid } from "@chakra-ui/layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";
import { WorkCard } from "./components";

import { TextRow } from "components/text-animations";

import content from "./content/all.content.json";

function filteredContent(searchTag: string) {
  return content.filter((el) => el.tags.includes(searchTag));
}

export const WorkSection = () => {
  return (
    <Box w="full" overflow="hidden">
      <Container maxW="container.lg" pt={16} pb={16} position="relative">
        <Center w="100%" pb={16}>
          <TextRow lines={2} word="WHAT I DO" />
        </Center>
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList>
            <Tab>Current</Tab>
            <Tab>Work</Tab>
            <Tab>Leadership</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={0} pt={8}>
              <SimpleGrid columns={2} spacing={8}>
                {filteredContent("current").map((item, index) => (
                  <WorkCard item={item} key={`current-${index}`} />
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel p={0} pt={8}>
              <SimpleGrid columns={2} spacing={8}>
                {filteredContent("work").map((item, index) => (
                  <WorkCard item={item} key={`current-${index}`} />
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel p={0} pt={8}>
              <SimpleGrid columns={2} spacing={8}>
                {filteredContent("ec").map((item, index) => (
                  <WorkCard item={item} key={`current-${index}`} />
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </Box>
  );
};
