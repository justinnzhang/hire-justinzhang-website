import { Box, Stack } from "@chakra-ui/layout";
import { useBoolean } from "@chakra-ui/hooks";

import { HeroSection, TLDRSection, WhoSection } from "../sections";

const Home = () => {
  const [isTLDR, setIsTLDR] = useBoolean(false);

  return (
    <Box w="full">
      <Stack spacing={8}>
        <HeroSection />
        <TLDRSection setIsTLDR={setIsTLDR} isTLDR={isTLDR} />
        <WhoSection />
      </Stack>
    </Box>
  );
};

export default Home;
