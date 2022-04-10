import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";

function logo(props: any) {
  return (
    <ChakraProvider>
      <Box boxSize={"40px"} bg={"dodgerblue"}>
        Box
      </Box>
    </ChakraProvider>
  );
}

export default logo;
