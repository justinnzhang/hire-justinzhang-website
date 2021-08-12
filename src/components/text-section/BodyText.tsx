import { Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

interface Props {
  text?: string;
  textEmp?: string;
}

export const BodyText = ({ text, textEmp }: Props) => {
  const BodyText = useColorModeValue("gray.600", "gray.400");
  const HighlightText = useColorModeValue("blue.500", "blue.300");

  return (
    <Text
      fontWeight={textEmp ? "medium" : "normal"}
      color={textEmp ? HighlightText : BodyText}
    >
      {text}
      {textEmp}
    </Text>
  );
};
