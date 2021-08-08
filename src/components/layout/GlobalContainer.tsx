import { ReactNode } from "react";
import { Container } from "@chakra-ui/layout";

interface Props {
  children: ReactNode;
}

export const GlobalContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
