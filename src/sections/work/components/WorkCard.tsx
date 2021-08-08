import { Box, Heading, Text, Stack } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { chakra } from "@chakra-ui/system";
import Image from "next/image";

import { AnimateChild } from "../../../components/animation";

interface WorkItem {
  imageKey: string;
  title: string;
  dates: string;
  body1: string;
  body2: string;
  logoAlt: string;
  tags: string[];
}

interface Props {
  item: WorkItem;
}

export const WorkCard = ({ item }: Props) => {
  const BodyText = useColorModeValue("gray.500", "gray.400");
  const CardBg = useColorModeValue("gray.100", "gray.700");
  const CardTitle = useColorModeValue("blue.500", "blue.300");
  const CardDate = useColorModeValue("blue.300", "blue.100");

  const { imageKey, title, dates, body1, body2, logoAlt } = item;

  return (
    <Box bg={CardBg} p={8} borderRadius="lg">
      <Stack spacing={4}>
        <Image
          src={imageKey}
          height={60}
          width={60}
          alt={logoAlt}
          layout="fixed"
        />
        <Stack spacing={1}>
          <Heading size="sm" letterSpacing="3%" as="h3" color={CardTitle}>
            {title}
          </Heading>
          <Text size="sm" color={CardDate}>
            {dates}
          </Text>
        </Stack>
        <Text fontWeight="medium">
          {body1} <chakra.span color={BodyText}>{body2}</chakra.span>
        </Text>
      </Stack>
    </Box>
  );
};
