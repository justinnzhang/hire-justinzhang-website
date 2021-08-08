import { Box, Stack } from "@chakra-ui/layout";
import { useBoolean } from "@chakra-ui/hooks";

import {
  HeroSection,
  TLDRSection,
  WhoSection,
  WorkSection,
  ValuesSection,
  SkillsSection,
} from "../sections";

const Home = () => {
  const [isTLDR, setIsTLDR] = useBoolean(false);

  return (
    <Box w="full">
      <HeroSection />
      <TLDRSection setIsTLDR={setIsTLDR} isTLDR={isTLDR} />
      <WhoSection />
      <ValuesSection />
      <SkillsSection />
      <WorkSection />
    </Box>
  );
};

export default Home;
