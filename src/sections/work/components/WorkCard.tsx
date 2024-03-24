import { Box, Heading, Text, Stack, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { chakra } from "@chakra-ui/system";
import { useBreakpointValue } from "@chakra-ui/media-query";

import Image from "next/image";

import { AnimateChild } from "../../../components/animation";

import { HiOutlineExternalLink } from "react-icons/hi";

interface WorkItem {
  imageKey: string;
  title: string;
  dates: string;
  body1: string;
  body2: string;
  logoAlt: string;
  ctaText?: string;
  ctaLink?: string;
  tags?: string[];
}

interface Props {
  item: WorkItem;
}

export const WorkCard = ({ item }: Props) => {
  const BodyText = useColorModeValue("gray.500", "gray.400");
  const CardBg = useColorModeValue("gray.100", "gray.700");
  const CardTitle = useColorModeValue("blue.500", "blue.300");
  const CardDate = useColorModeValue("blue.300", "blue.100");

  const { imageKey, title, dates, body1, body2, logoAlt, ctaText, ctaLink } =
    item;

  return (
    <AnimateChild>
      <Box
        bg={CardBg}
        p={8}
        borderRadius="lg"
        h="100%"
        w={["90vw", "50vw", "30vw"]}
        display="flex"
        alignItems="center"
        mr={4}
      >
        <Stack spacing={4}>
          <Image
            src={imageKey}
            height={50}
            width={50}
            alt={logoAlt}
            layout="fixed"
            objectFit="contain"
          />
          <Stack spacing={1}>
            <Heading size="sm" letterSpacing="0.1rem" as="h3" color={CardTitle}>
              {title}
            </Heading>
            <Text size="xs" color={CardDate} fontWeight="medium">
              {dates}
            </Text>
          </Stack>
          <Text fontWeight="medium">
            {body1} <chakra.span color={BodyText}>{body2}</chakra.span>
          </Text>
          {ctaLink && (
            <Button
              colorScheme="blue"
              leftIcon={<HiOutlineExternalLink />}
              as={Link}
              isExternal
              href={ctaLink}
            >
              {ctaText}
            </Button>
          )}
        </Stack>
      </Box>
    </AnimateChild>
  );
};
