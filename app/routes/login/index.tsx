import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  FormErrorMessage,
  useColorModeValue,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "@remix-run/react";

import { signIn, signUp } from "~/utils/db.server";
import { createUserSession } from "~/utils/session.server";

import { Link as Linka } from "@remix-run/react";
export let action = async ({ request }) => {
  let formData = await request.formData();

  let email = formData.get("email");
  let password = formData.get("password");

  const { user } = await signIn(email, password);
  const token = await user.getIdToken();
  return createUserSession(token, "/");
};

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} mt={"-16"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign in to your account
          </Heading>
          <Text
            fontSize={"lg"}
            color={"gray.600"}
            textAlign={{ sm: "center", base: "center" }}
          >
            to enjoy all of our cool <Link color={"blue.400"}>features</Link>
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Form method="post">
            <VStack spacing={4} align="flex-start">
              {/* No se va a usar para las pruebas */}
              {/* <FormControl id={"firstName"} isRequired>
                  <FormLabel>Nombre de la cuenta </FormLabel>
                  <Input
                    as={Input}
                    id={"name"}
                    name={"name"}
                    type={"text"}
                    variant={"outline"}
                  />
                </FormControl> */}
              <FormControl isRequired>
                <FormLabel htmlFor="email">Correo Electronico</FormLabel>
                <Input
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  variant="outline"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Contraseña</FormLabel>
                <Input
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  variant="outline"
                  validate={(value: any) => {
                    let error;

                    if (value.length < 5) {
                      error = "Password must contain at least 6 characters";
                    }

                    return error;
                  }}
                />
              </FormControl>
              <Button
                type="submit"
                color={"white"}
                bg={"purple.400"}
                isFullWidth
                loadingText="Submitting"
                size={"lg"}
                _hover={{ bg: "purple.500" }}
              >
                Ingresar
              </Button>
              <Text textAlign={"center"}>
                New user?{" "}
                <Linka to={"/register"}>
                  <Link color={"blue.400"}>Register</Link>
                </Linka>
              </Text>
            </VStack>
          </Form>
        </Box>
      </Stack>
    </Flex>
  );
}
