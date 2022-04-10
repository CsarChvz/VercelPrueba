import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  ChakraProvider,
} from "@chakra-ui/react";
import theme from "~/src/theme";

import Illustration from "~/src/svg/IlustrationChoose";
export default function CallToActionWithIllustration() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={"5xl"} mt={"-20"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Meeting scheduling{" "}
            <Text as={"span"} color={"orange.400"}>
              made easy
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Never miss a meeting. Never be late for one too. Keep track of your
            meetings and receive smart reminders in appropriate times. Read your
            smart “Daily Agenda” every morning.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              Comprar
            </Button>
            <Button
              rounded={"full"}
              px={6}
              // Probando para que se vean mejor
              // p={["3", "5", "10"]}
              bg={"brand.secondary"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Vender
            </Button>
          </Stack>
          <Flex w={"full"}>
            <Illustration
              height={{ sm: "24rem", lg: "28rem" }}
              mt={{ base: 7, sm: 12 }}
            />
          </Flex>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}
