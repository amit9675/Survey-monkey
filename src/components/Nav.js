import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import AlertS from '../components/AlertS'
import { useAuth0 } from "@auth0/auth0-react";
import { AddIcon } from "@chakra-ui/icons"
import Cookies from './Cookies';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Drawers from './Drawer';
import { Link as RouterLink, Router } from 'react-router-dom';
const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position='fixed' w='100%'>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    {/* <Box>Logo</Box> */}
                    <Drawers />
                    <RouterLink to='/'>
                        <Box> <img src="https://prod.smassets.net/assets/website/2.196.1/images/logo-surveymonkey.svg" alt="" /></Box>
                    </RouterLink>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>

                                <Cookies />

                                {/* <RouterLink to='/login'>
                                    <Button colorScheme='blue'>Login</Button>
                                </RouterLink>
                                <RouterLink to='/signup'>
                                    <Button colorScheme='blue'>Get Started</Button>
                                </RouterLink> */}
                                {isAuthenticated && <div>

                                    <MenuButton
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        minW={0}>
                                        <Avatar
                                            size={'sm'}
                                            src={user.picture}
                                        />
                                    </MenuButton>

                                    <MenuList alignItems={'center'} >
                                        <br />
                                        <Center>
                                            <Avatar
                                                size={'2xl'}
                                                src={user.picture}
                                            />
                                        </Center>
                                        <br />
                                        <Center>
                                            {/* <p>{user.name}</p> */}
                                            <Button colorScheme='blue'>{user.name}</Button>
                                        </Center>
                                        <br />
                                        <MenuDivider />
                                        <MenuItem>{user.email}</MenuItem>
                                        <MenuItem>Account Settings</MenuItem>
                                        {/* <MenuItem><AlertS /></MenuItem> */}
                                        <AlertS />
                                        {/* <MenuItem><Button onClick={() => logout({ returnTo: window.location.origin })} colorScheme='blue'>Log out</Button></MenuItem> */}
                                    </MenuList>
                                </div>}
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>


        </>
    );
}