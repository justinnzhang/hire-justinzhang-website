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

  console.log("isFacebookApp", isFacebookApp());

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
      {isFacebookApp() && "THIS IS FACEBOOK"}
      <TLDRSection setIsTLDR={setIsTLDR} isTLDR={isTLDR} />
      {contentMarkup}
    </Box>
  );
};

export default Home;
