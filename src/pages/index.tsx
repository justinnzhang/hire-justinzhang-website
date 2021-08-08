import { Box, Stack } from "@chakra-ui/layout";
import { useBoolean } from "@chakra-ui/hooks";

import { HeroSection, TLDRSection, WhoSection } from "../sections";
import { WorkSection } from "sections/work";

const Home = () => {
  const [isTLDR, setIsTLDR] = useBoolean(false);

  return (
    <Box w="full">
      <Stack spacing={8}>
        <HeroSection />
        <TLDRSection setIsTLDR={setIsTLDR} isTLDR={isTLDR} />
        <WhoSection />
        <WorkSection />
      </Stack>
    </Box>
  );
};

export default Home;
