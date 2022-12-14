import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
} from '@chakra-ui/react';
import '../Scripts/signup.js'
import React, { useState } from "react"
import LoginWith from '../components/loginwith';
import Nav from '../components/Nav';
const avatars = [
    {
        name: 'Ryan Florence',
        url: 'https://bit.ly/ryan-florence',
    },
    {
        name: 'Segun Adebayo',
        url: 'https://bit.ly/sage-adebayo',
    },
    {
        name: 'Kent Dodds',
        url: 'https://bit.ly/kent-c-dodds',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'https://bit.ly/prosper-baba',
    },
    {
        name: 'Christian Nwamba',
        url: 'https://bit.ly/code-beast',
    },
];
const initstate = {
    name: "",
    email: "",
    password: "",
    PhoneNumber: ""
};
export default function JoinOurTeam() {
    const [text, settext] = useState(initstate);
    const handlechange = (e) => {
        // const val =
        //     e.target.type === "checkbox" ? e.target.checked : e.target.value;
        // settext({ ...text, [e.target.name]: val });
        settext(e.target.value)
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(text);
    };

    const { name, email, PhoneNumber, password } = text;
    return (
        <>
            <Nav />
            <Box >
                <Container
                    as={SimpleGrid}
                    maxW={'7xl'}

                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 10, lg: 32 }}
                    py={{ base: 10, sm: 20, lg: 32 }}>
                    <Stack spacing={{ base: 10, md: 20 }}>
                        <Heading
                            lineHeight={1.1}
                            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                            Create Free {' '} <br />
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text">
                                Surveys &
                            </Text>{' '}
                            forms online in <br /> minutes
                        </Heading>
                        <Stack direction={'row'} spacing={4} align={'center'}>
                            <AvatarGroup>
                                {avatars.map((avatar) => (
                                    <Avatar
                                        key={avatar.name}
                                        name={avatar.name}
                                        src={avatar.url}
                                        // size={useBreakpointValue({ base: 'md', md: 'lg' })}
                                        // position={'relative'}
                                        zIndex={2}
                                        _before={{
                                            content: '""',
                                            width: 'full',
                                            height: 'full',
                                            rounded: 'full',
                                            transform: 'scale(1.125)',
                                            bgGradient: 'linear(to-bl, red.400,pink.400)',
                                            position: 'absolute',
                                            zIndex: -1,
                                            top: 0,
                                            left: 0,
                                        }}
                                    />
                                ))}
                            </AvatarGroup>
                            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                                +
                            </Text>
                            <Flex
                                align={'center'}
                                justify={'center'}
                                fontFamily={'heading'}
                                fontSize={{ base: 'sm', md: 'lg' }}
                                bg={'gray.800'}
                                color={'white'}
                                rounded={'full'}
                                minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                                minHeight={useBreakpointValue({ base: '44px', md: '60px' })}

                                _before={{
                                    content: '""',
                                    width: 'full',
                                    height: 'full',
                                    rounded: 'full',
                                    transform: 'scale(1.125)',
                                    bgGradient: 'linear(to-bl, green.400,yellow.400)',
                                    // position: 'absolute',
                                    zIndex: -1,
                                    top: 0,
                                    left: 0,
                                }}>
                                YOU
                            </Flex>
                        </Stack>
                    </Stack>
                    <Stack
                        bg={'gray.50'}
                        rounded={'xl'}
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                        maxW={{ lg: 'lg' }}>
                        <Stack spacing={4}>
                            <Heading
                                color={'gray.800'}
                                lineHeight={1.1}
                                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                                Join our team
                                <Text
                                    as={'span'}
                                    bgGradient="linear(to-r, red.400,pink.400)"
                                    bgClip="text">
                                    !
                                </Text>
                            </Heading>
                            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                                Start with an expert-written template
                            </Text>
                        </Stack>
                        <Box as={'form'} mt={10}>
                            <Stack spacing={4}>
                                <Input
                                    value={name}
                                    onChange={handlechange}
                                    placeholder="Name"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />
                                <Input
                                    value={email}
                                    onChange={handlechange}
                                    placeholder="Youremail@gmail.com"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />
                                <Input
                                    value={password}
                                    onChange={handlechange}
                                    type="password"
                                    placeholder="Password"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />
                                <Input
                                    value={PhoneNumber}
                                    onChange={handlechange}
                                    placeholder="Phone Number"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />

                                <Input
                                    type='file'
                                    placeholder="Choose Profile Photo"
                                    bg={'gray.100'}
                                    border={0}
                                    color={'gray.500'}
                                    _placeholder={{
                                        color: 'gray.500',
                                    }}
                                />
                            </Stack>
                            <Button
                                fontFamily={'heading'}
                                mt={8}
                                w={'full'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                color={'white'}
                                onClick={handlesubmit}
                                _hover={{
                                    bgGradient: 'linear(to-r, red.400,pink.400)',
                                    boxShadow: 'xl',
                                }}>
                                SignUp
                            </Button>
                        </Box>
                        {/* form */}
                        <LoginWith />
                    </Stack>
                </Container>
            </Box>
            {/* <Loginwith /> */}
        </>
    );
}


