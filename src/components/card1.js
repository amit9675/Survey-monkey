// import Image from 'next/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Image,
    Button
} from '@chakra-ui/react';

export default function Card1() {
    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image h="100%"
                        w="100%"
                        src={
                            'https://fuzzymath.com/wp-content/uploads/2016/10/2016-10-Newsletter_RV_Animate_6-1.gif'
                        }
                        layout={'fill'}
                    />
                </Box>
                <Stack>

                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        SURVEY PLATFORM
                    </Heading>
                    <Text color={'gray.500'}>
                        Need a flexible way to get customer feedback?
                        Create on-brand feedback surveys in minutes. Send surveys via multiple channels, easily analyze your data, and share actionable insights with your team.
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Button margin="auto" bgColor="green.400">See all Plans</Button>

                </Stack>
            </Box>
        </Center>
    );
}