import { Box, Flex, Link, Spacer } from "@chakra-ui/layout";
import { ReactNode } from "react";

import Image from "next/image";

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
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
