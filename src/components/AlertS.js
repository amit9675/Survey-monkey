import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
function AlertS() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (
        <>
            <Button colorScheme='red' onClick={onOpen}>
                Logout
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Logout
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter gap="15px">
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            {/* <Button colorScheme='red' onClick={onClose} ml={3} onClick={() => logout({ returnTo: window.location.origin })}>
                                Logout
                            </Button> */}
                            <Button onClick={() => logout({ returnTo: window.location.origin })} colorScheme='blue'>Log out</Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}
export default AlertS;