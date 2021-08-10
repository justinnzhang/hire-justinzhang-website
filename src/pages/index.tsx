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
  FinalSection,
} from "../sections";
import { FacebookWarning } from "../components/FacebookWarning";

function isFacebookApp() {
  if (
    typeof window !== "undefined" &&
    typeof window.navigator !== "undefined"
  ) {
    var ua = navigator.userAgent || navigator.vendor;
    return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
  }
}

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
      <FinalSection />
    </>
  );

  return (
    <Box w="full">
      {isFacebookApp() && <FacebookWarning />}
      <HeroSection />
      <TLDRSection setIsTLDR={setIsTLDR} isTLDR={isTLDR} />
      {contentMarkup}
    </Box>
  );
};

export default Home;
