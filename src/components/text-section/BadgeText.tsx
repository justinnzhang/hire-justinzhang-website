import { Stack, Text, Badge } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

interface Props {
  text?: string;
  badgeText?: string;
}

export const BadgeText = ({ text, badgeText }: Props) => {
  const BodyText = useColorModeValue("gray.600", "gray.400");

  return (
    <Stack>
      <Badge w="fit-content">{badgeText}</Badge>
      <Text color={BodyText}>{text}</Text>
    </Stack>
  );
};
