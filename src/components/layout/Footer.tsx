import {
  Box,
  Link as ChakraLink,
  Heading,
  Text,
  Container,
  Grid,
  GridItem,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { VisuallyHidden } from "@chakra-ui/visually-hidden";
import { useColorModeValue } from "@chakra-ui/color-mode";

import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoGlobeOutline,
} from "react-icons/io5";

const SOCIAL_MEDIA = [
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/in/justinzhang000/",
    alt: "LinkedIn",
  },
  {
    icon: <IoLogoGithub />,
    url: "https://github.com/justinnzhang",
    alt: "Github",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/justinnzhang",
    alt: "Twitter",
  },
  {
    icon: <IoGlobeOutline />,
    url: "https://justinzha.ng",
    alt: "Website",
  },
];

const BUILD_LINKS = [
  {
    content: (
      <Text>
        <ChakraLink
          isExternal
          href="https://reactjs.org/"
          textDecorationLine="underline"
        >
          React.js
        </ChakraLink>{" "}
        +{" "}
        <ChakraLink
          isExternal
          href="https://nextjs.org/"
          textDecorationLine="underline"
        >
          Next.js
        </ChakraLink>{" "}
        +{" "}
        <ChakraLink
          isExternal
          href="https://www.typescriptlang.org/"
          textDecorationLine="underline"
        >
          Typescript
        </ChakraLink>
      </Text>
    ),
  },
  {
    content: (
      <Text>
        <ChakraLink
          isExternal
          href="https://chakra-ui.com/"
          textDecorationLine="underline"
        >
          Chakra UI
        </ChakraLink>
      </Text>
    ),
  },
  {
    content: (
      <Text>
        <ChakraLink
          isExternal
          href="https://www.framer.com/docs/"
          textDecorationLine="underline"
        >
          Framer Motion Animation Library
        </ChakraLink>
      </Text>
    ),
  },
  {
    content: (
      <Text>
        Deployed on{" "}
        <ChakraLink
          isExternal
          href="https://vercel.com/"
          textDecorationLine="underline"
        >
          Vercel
        </ChakraLink>
      </Text>
    ),
  },
  {
    content: (
      <Text>
        <ChakraLink
          isExternal
          href="https://www.figma.com/file/IpkPhHox2Z6o1Hn2kCgwPJ/Site-Mockups?node-id=0%3A1"
          textDecorationLine="underline"
        >
          Figma Exploration
        </ChakraLink>
      </Text>
    ),
  },
  {
    content: (
      <Text>
        <ChakraLink
          isExternal
          href="https://github.com/justinnzhang/hire-justinzhang-website"
          textDecorationLine="underline"
        >
          Github Repository
        </ChakraLink>
      </Text>
    ),
  },
];

const Footer = () => {
  const CardBg = useColorModeValue("gray.100", "gray.700");

  const socialsMarkup = SOCIAL_MEDIA.map(({ icon, url, alt }) => (
    <Button
      href={url}
      key={alt}
      colorScheme="blue"
      size="lg"
      variant="ghost"
      as={ChakraLink}
      isExternal
      fontSize="1.5rem"
    >
      <VisuallyHidden>{alt}</VisuallyHidden>
      {icon}
    </Button>
  ));

  return (
    <Box w="full" bg={CardBg} as="footer" pt={12} pb={12}>
      <Container maxWidth="container.lg">
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={[12, null, 6]} pb={8}>
            <Heading size="md" pb={4}>
              My Links
            </Heading>
            {socialsMarkup}
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <Heading size="md" pb={4}>
              How I built this
            </Heading>
            <List spacing={2}>
              {BUILD_LINKS.map(({ content }, index) => (
                <ListItem key={`links-${index}`}>{content}</ListItem>
              ))}
            </List>
          </GridItem>
        </Grid>
        <Box pt={8}>
          <Text>
            © {new Date().getFullYear()} -{" "}
            <ChakraLink href="https://justinzhang.ca" isExternal>
              Justin Zhang
            </ChakraLink>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
