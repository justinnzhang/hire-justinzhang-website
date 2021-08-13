import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

import Footer from "./Footer";
import Meta from "./Meta";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box transition="0.3s all ease-out" id="top">
      <Meta />
      <Box as="main">
        <Header />
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
