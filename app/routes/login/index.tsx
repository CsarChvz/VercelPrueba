import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { Form } from "@remix-run/react";

export default function SimpleCard() {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} mt={"-16"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign in to your account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
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
            initialValues={{ email: "", password: "", rememberMe: false }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl id="email" isRequired>
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="outline"
                    />
                  </FormControl>
                  <FormControl
                    id="password"
                    isInvalid={!!errors.password && touched.password}
                    isRequired
                  >
                    <FormLabel>Password</FormLabel>
                    <Field
                      type="password"
                      as={Input}
                      id="password"
                      name="password"
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

                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Field as={Checkbox} id="rememberMe" name="rememberMe">
                        Remember me?
                      </Field>
                      <Link color={"blue.400"}>Forgot password?</Link>
                    </Stack>
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      loadingText="Submitting"
                      type="submit"
                    >
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
}
