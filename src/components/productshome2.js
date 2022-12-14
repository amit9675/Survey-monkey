import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
} from 'react-icons/io5';
import { CheckIcon } from "@chakra-ui/icons"
import { ReactElement } from 'react';

//   interface FeatureProps {
//     text: string;
//     iconBg: string;
//     icon?: ReactElement;
//   }

const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function ProductHome2() {
    return (
        <Container maxW={'5xl'} py={12} >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>

                    <Heading>Easily create surveys and forms fast</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Ask the right questions with<i>AI-powered guidance,</i>  logic, and so many question types. Or choose from 250+ expert-written survey templates that you can customize to match your brand’s look and feel.
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={
                                <Icon as={CheckIcon} color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Collect information and feedback from almost anywhere'}
                        />
                        <Feature
                            icon={<Icon as={CheckIcon} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Uncover insights that you can act on quickly'}
                        />
                        <Feature
                            icon={
                                <Icon as={CheckIcon} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'Find a toolkit for your role'}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://prod.smassets.net/assets/cms/sm/uploads//TaT-Collect.gif'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    );
}