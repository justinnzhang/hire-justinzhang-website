import { Flex, Link, Text, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container maxWidth="container.lg" p={4}>
      <Flex as="footer" width="full" align="center">
        <Text>
          {new Date().getFullYear()} -{" "}
          <Link href="https://justinzhang.ca" isExternal>
            justinzhang.ca
          </Link>
        </Text>
      </Flex>
    </Container>
  );
};

export default Footer;
