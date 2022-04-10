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
import { Formik, Field } from "formik";
import FormFormik from "~/src/components/Forms/Form";
import { Form } from "@remix-run/react";
export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} mt={"-16"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Registrate
          </Heading>
          <Text
            fontSize={"lg"}
            color={"gray.600"}
            textAlign={{ sm: "center", base: "center" }}
          >
            para disfrutar de todas nuestras funciones geniales✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          {/* Inicio de formik */}
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl id={"firstName"} isRequired>
                    <FormLabel>Nombre de la cuenta </FormLabel>
                    <Field
                      as={Input}
                      id={"email"}
                      name={"name"}
                      type={"text"}
                      variant={"outline"}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="email">Correo Electronico</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="outline"
                    />
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                    isRequired
                  >
                    <FormLabel>Contraseña</FormLabel>
                    <Field
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
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
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
                    Registrarse
                  </Button>
                  <Text textAlign={"center"}>
                    Already a user? <Link color={"blue.400"}>Login</Link>
                  </Text>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
}
