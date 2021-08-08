import { Box, Container } from "@chakra-ui/layout";

import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <Container maxWidth="container.lg" p={4}>
      <Box position="fixed" right="0">
        <ThemeToggle />
      </Box>
    </Container>
  );
};

export default Header;
