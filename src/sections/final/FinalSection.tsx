import {
  Container,
  Text,
  Heading,
  Grid,
  GridItem,
  Stack,
  Link,
  Box,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const FinalSection = () => {
  const BodyText = useColorModeValue("gray.600", "gray.300");
  const CardText = useColorModeValue("gray.500", "gray.400");
  const HighlightText = useColorModeValue("blue.500", "blue.300");
  const CardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW="container.lg" pb={16} position="relative">
      <Grid templateColumns="repeat(12, 1fr)" gap={24} alignItems="center">
        <GridItem colSpan={[12, 12, 6]}>
          <Stack spacing={4}>
            <Heading size="lg">
              In conclusion,{" "}
              <chakra.span color={HighlightText}>
                I&apos;m here to learn
              </chakra.span>
            </Heading>
            <Text color={BodyText}>
              My number 1 passion is making things - hence PM is a way for me to
              build across engineering, design, and business
            </Text>
            <Text color={BodyText}>
              I&apos;ve got a lot more to share, and would love to chat about
              potential internship opportunities - let&apos;s work together!
            </Text>
            <Stack direction="row" spacing={4} pt={4}>
              <Button
                colorScheme="blue"
                w="fit-content"
                as={Link}
                href="mailto:hirejustinzhang@gmail.com"
                isExternal
              >
                Let&apos;s get in touch!
              </Button>
              <Button
                w="fit-content"
                as={Link}
                href="mailto:hirejustinzhang@gmail.com"
                isExternal
                variant="ghost"
              >
                PDF Resume
              </Button>
            </Stack>
          </Stack>
        </GridItem>
        <GridItem colSpan={[12, 12, 6]} w="100%" h="100%">
          <Box bg={CardBg} borderRadius="lg" p={8}>
            <Stack>
              <Text fontWeight="bold" pb={4}>
                Fun facts
              </Text>
              <Text color={CardText}>Tech and gadget enthusiast</Text>
              <Text color={CardText}>
                Favorite fruit is{" "}
                <Link
                  color={HighlightText}
                  isExternal
                  href="https://www.google.com/search?q=durian&sxsrf=ALeKk03lX6LGG5MPefvOxxgUY-bAMZomsw:1628566732329&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjX48rsw6XyAhUHVN8KHUZsBn4Q_AUoAXoECAEQAw&cshid=1628566747467052&biw=2560&bih=1297&dpr=1.5"
                >
                  durian
                </Link>
              </Text>
              <Text color={CardText}>
                Lowest grade was a 51 in high school computer science
              </Text>
              <Text color={CardText}>Love videography and photography</Text>
              <Text color={CardText}>
                Pineapple on pizza is not bad ¯\_(ツ)_/¯
              </Text>
            </Stack>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};
