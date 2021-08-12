import { Heading } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { useColorModeValue } from "@chakra-ui/color-mode";

interface Props {
  text?: string;
  textEmp?: string;
}

export const HeadingText = ({ text, textEmp }: Props) => {
  const HighlightText = useColorModeValue("blue.500", "blue.300");

  return (
    <Heading size="lg">
      {text}{" "}
      {textEmp && <chakra.span color={HighlightText}>{textEmp}</chakra.span>}
    </Heading>
  );
};
