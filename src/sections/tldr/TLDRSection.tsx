import {
  Box,
  Container,
  Stack,
  Flex,
  Spacer,
  Heading,
  Text,
} from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Switch } from "@chakra-ui/switch";
import { useColorModeValue } from "@chakra-ui/color-mode";

interface Props {
  setIsTLDR: any;
  isTLDR: boolean;
}

export const TLDRSection = ({ setIsTLDR, isTLDR }: Props) => {
  const BodyText = useColorModeValue("gray.500", "gray.400");
  const CardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box>
      <Container maxW="container.lg">
        <Box bg={CardBg} borderRadius="md" p={8}>
          <Flex>
            <Flex maxW="20rem">
              <Stack spacing={2}>
                <FormControl display="flex" alignItems="center" mb={4}>
                  <Switch
                    id="tldr-toggle"
                    onChange={setIsTLDR.toggle}
                    isChecked={isTLDR}
                  />
                  <FormLabel
                    htmlFor="tldr-toggle"
                    mb="0"
                    ml={4}
                    color={isTLDR ? "green.500" : "gray.400"}
                  >
                    TLDR: {isTLDR ? "ON" : "OFF"}
                  </FormLabel>
                </FormControl>
                <Heading as="h3" size="md">
                  TLDR Mode
                </Heading>
                <Text size="md" color={BodyText}>
                  This will hide all the fancy text and layouts to get straight
                  to the point
                </Text>
              </Stack>
            </Flex>
            <Flex></Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
