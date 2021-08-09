import { Box } from "@chakra-ui/layout";
import { useBoolean } from "@chakra-ui/hooks";

import {
  HeroSection,
  TLDRSection,
  WhoSection,
  WorkSection,
  ValuesSection,
  SkillsSection,
  ShortSection,
} from "../sections";

const Home = () => {
  const [isTLDR, setIsTLDR] = useBoolean(false);

  const contentMarkup = isTLDR ? (
    <ShortSection />
  ) : (
    <>
      <WhoSection />
      <ValuesSection />
      <SkillsSection />
      <WorkSection />
    </>
  );

  return (
    <Box w="full">
      <HeroSection />
      <TLDRSection setIsTLDR={setIsTLDR} isTLDR={isTLDR} />
      {contentMarkup}
    </Box>
  );
};

export default Home;
