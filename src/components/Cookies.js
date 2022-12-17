import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Radio,
    Button,
    RadioGroup,
    Stack,
} from '@chakra-ui/react'
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'
function Cookies() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('bottom')
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (
        <>
            <RadioGroup defaultValue={placement} onChange={setPlacement}>

            </RadioGroup>
            <Button colorScheme='blue' onClick={onOpen}>
                Login
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'> "Privacy and security," </DrawerHeader>
                    <DrawerBody>

                        Cookies are small text files sent by the website you're visiting to the computer or device you're using. If accepted, these cookies are stored on the web browser of your device. Cookies can then track and collect data from your browser, sending that data back to the website owner.

                        <div style={{ padding: "20px", gap: '20px', display: 'flex', justifyContent: 'end' }}>
                            <Button style={{ marginRight: "15px" }} onClick={onClose} colorScheme='red'>Decline</Button>
                            <Button onClick={() => loginWithRedirect()} colorScheme='green'>Accpect</Button>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default Cookies;