import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

import Footer from "./Footer";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box transition="0.3s all ease-out">
      <Meta />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
