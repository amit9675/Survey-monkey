import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Radio, RadioGroup,
    Stack,
    Button,
    Input,
    Icon
} from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Link as RouterLink, Router } from 'react-router-dom';
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
function Drawers() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <>
            <Button ref={btnRef} onClick={onOpen}>
                <Icon as={HamburgerIcon} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />

                    {/* <DrawerHeader>Create your account</DrawerHeader> */}

                    <DrawerBody backgroundImage="url('https://media0.giphy.com/media/7AtHoQ9XWbpwLRxs0t/giphy.webp?cid=ecf05e47w3l47egylr2o9r3aidutm8pp61444gdkyxmlk60c&rid=giphy.webp&ct=g')"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover">

                        <RouterLink to='/products'>
                            <Button bgColor='teal' variant='outline' w="100%" marginTop="100px">
                                Products
                            </Button>
                        </RouterLink>
                        <br /> <br /> <br />
                        <RouterLink to='/solutions'>
                            <Button bgColor='teal' variant='outline' w="100%">
                                Solutions
                            </Button>
                        </RouterLink>
                        <br /> <br /> <br />
                        <RouterLink to='/pricing'>
                            <Button bgColor='teal' variant='outline' w="100%">
                                Pricing
                            </Button>
                        </RouterLink>
                        <br /> <br /> <br />
                        <Button bgColor='teal' variant='outline' w="100%" >
                            Resources
                        </Button>

                    </DrawerBody>

                    {/*  <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter> */}
                </DrawerContent>

            </Drawer>
        </>
    )
}
export default Drawers;

{/* <Button variant='outline' mr={3} onClick={onClose}>
    Cancel
</Button> */}