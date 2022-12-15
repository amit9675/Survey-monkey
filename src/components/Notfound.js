import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useAuth0 } from "@auth0/auth0-react";
export default function NotFound() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (
        <Box textAlign="center" py={150} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text">
                For this you have to login first
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} mb={6}>
                The page you're looking for does not seem to exist
            </Text>

            <Button
                onClick={() => loginWithRedirect()}
                colorScheme="blue"
                // bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                color="black"

            // variant="solid"
            >
                Login Here
            </Button>
        </Box>
    );
}