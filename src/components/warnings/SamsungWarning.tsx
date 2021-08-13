import { useState } from "react";

import { Box, Container, Stack, Text, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

export const SamsungWarning = () => {
  const [open, setOpen] = useState(true);

  if (open) {
    return (
      <Box
        position="fixed"
        w="100%"
        bottom="0"
        left="0"
        zIndex="999999999"
        className="adaptive-glass"
      >
        <Container maxW="container.lg" p={8}>
          <Stack spacing={4} direction="column">
            <Heading size="md">
              Samsung default browser breaks my site 😥
            </Heading>

            <Text>
              For the best experience, please open this site on your desktop
              computer or other browser!
            </Text>

            <Button
              w="fit-content"
              onClick={() => setOpen(false)}
              variant="solid"
              colorScheme="blue"
            >
              Dismiss
            </Button>
          </Stack>
        </Container>
      </Box>
    );
  } else {
    return null;
  }
};
