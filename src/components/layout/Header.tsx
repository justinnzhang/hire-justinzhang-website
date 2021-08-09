import {
  Flex,
  Link,
  Container,
  Spacer,
  Box,
  Center,
  Text,
} from "@chakra-ui/layout";
import Image from "next/image";

import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <Box className="adaptive-glass" position="sticky" top="0" zIndex="99999999">
      <Container maxWidth="container.lg" pl={4} pr={4} pt={2} pb={2}>
        <Flex alignItems="center">
          <Center as={Link} href="#top">
            <Image
              src="/static/memoji-smiling.png"
              alt="Apple memoji of Justin Zhang"
              width={50}
              height={50}
            />
            <Text>hirejustinzhang.com</Text>
          </Center>
          <Spacer />
          <ThemeToggle />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
