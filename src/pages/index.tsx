import { useState } from "react";
import { Box } from "@chakra-ui/layout";
import { useBoolean } from "@chakra-ui/hooks";

import { useRouter } from "next/router";

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
import { WarningModal } from "../components/warnings";

import companies from "../constants/companies.content.json";

function companyFilter(company?: string | string[]) {
  const item = companies.find((el) => el?.company === company);

  if (item) {
    return item;
  } else {
    return {
      company: company as string,
    };
  }
}

function isFacebookApp() {
  if (
    typeof window !== "undefined" &&
    typeof window.navigator !== "undefined"
  ) {
    var ua = navigator.userAgent || navigator.vendor;
    return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
  }
}

function isSamsungBrowser() {
  if (
    typeof window !== "undefined" &&
    typeof window.navigator !== "undefined"
  ) {
    var ua = navigator.userAgent || navigator.vendor;
    return ua.indexOf("SamsungBrowser") > -1;
  }
}

function getBrowserType() {
  if (isFacebookApp()) {
    return "The Facebook in-app";
  } else if (isSamsungBrowser()) {
    return "Samsung's default";
  }
}

const Home = () => {
  const router = useRouter();
  const { hi } = router.query;

  const [isTLDR, setIsTLDR] = useBoolean(false);
  const [open, setOpen] = useState(
    isSamsungBrowser() || isFacebookApp() || false
  );

  const selectedCompany = companyFilter(hi);

  console.log(
    `   ________________________________________
  < mooooooooooooooooooooooooooooooooooooo >
   ----------------------------------------
          \\   ^__^
           \\  (oo)\\_______
              (__)\\       )\\/\\
                  ||----w |
                  ||     ||`
  );

  const contentMarkup = isTLDR ? (
    <ShortSection companyItem={selectedCompany} />
  ) : (
    <>
      <WhoSection />
      <ValuesSection />
      <SkillsSection />
      <WorkSection />
      <FinalSection companyItem={selectedCompany} />
    </>
  );

  return (
    <Box w="full">
      <WarningModal
        open={open}
        setOpen={setOpen}
        typeOfBrowser={getBrowserType()}
      />
      <HeroSection companyItem={selectedCompany} />
      <TLDRSection setIsTLDR={setIsTLDR} isTLDR={isTLDR} />
      {contentMarkup}
    </Box>
  );
};

export default Home;
