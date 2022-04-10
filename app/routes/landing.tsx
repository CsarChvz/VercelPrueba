import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "~/src/theme";

function landing(props: any) {
  return <ChakraProvider theme={theme}></ChakraProvider>;
}

export default landing;
