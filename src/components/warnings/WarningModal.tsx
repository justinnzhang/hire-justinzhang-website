import { Dispatch, SetStateAction } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";
import { Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

interface WarningProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  typeOfBrowser?: string;
}

export const WarningModal = ({
  open,
  setOpen,
  typeOfBrowser = "Your current",
}: WarningProps) => {
  return (
    <>
      <Modal onClose={() => setOpen(false)} isOpen={open} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{typeOfBrowser} browser breaks my site 😥</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              For the best experience, please open this site in Safari, Chrome,
              or Chromium-based browsers!
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
