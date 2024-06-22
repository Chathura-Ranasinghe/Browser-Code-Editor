import { Container, Heading, Spinner, Text, VStack, Alert, AlertIcon, Center } from "@chakra-ui/react";
import useSessions from "../hooks/useSessions";
import SessionCard from "../components/SessionCard";
import useAuth from "../hooks/useAuth";

const Settings = () => {

  const { user } = useAuth();
  const { email, verified, createdAt } = user;

  const { sessions, isPending, isSuccess, isError } = useSessions();

  return (
    <Container mt={10}>
      <Center flexDir="column">
        <Heading mb={4}>My Account</Heading>
        {!verified && (
          <Alert status="warning" w="fit-content" borderRadius={12} mb={3}>
            <AlertIcon />
            Please verify your email
          </Alert>
        )}
        <Text color="white" mb={2}>
          Email:{" "}
          <Text as="span" color="gray.300">
            {email}
          </Text>
        </Text>
        <Text color="white">
          Created on{" "}
          <Text as="span" color="gray.300">
            {new Date(createdAt).toLocaleDateString("en-US")}
          </Text>
        </Text>
      </Center>
      <Text mt={10} mb={6} fontSize={20}>My Sessions</Text>
      {isPending && <Spinner />}
      {isError && <Text color="red.400">Failed to get sessions.</Text>}
      {isSuccess && (
        <VStack spacing={3} align="flex-start">
          {sessions.map((session) => (
            <SessionCard key={session._id} session={session} />
          ))}
        </VStack>
      )}
    </Container>
  );
};
export default Settings;
