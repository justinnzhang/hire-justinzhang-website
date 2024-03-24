import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box as="main" transition="0.3s all ease-out" id="top">
        <Header />
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
