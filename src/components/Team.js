import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};

const TestimonialAvatar = ({
    src,
    name,
    title,
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} alt={name} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};

export default function Team() {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.700')} w="80%" margin="auto" marginTop="50px">
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading>Tools that spark business breakthroughs</Heading>
                    <Text fontSize="30px">Discover specialized toolkits designed for your role and industry.</Text>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Customer Support</TestimonialHeading>
                            <TestimonialText>
                                Provide better customer experiences while keeping your teams engaged.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://prod.smassets.net/assets/cms/sm/uploads//hr-leader-toolkit-directory.png'
                            }
                            name={'Jane Cooper'}
                            title={'CEO at ABC Corporation'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Human resources</TestimonialHeading>
                            <TestimonialText>
                                Retain your workforce by fostering a world-class employee experience.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://prod.smassets.net/assets/cms/sm/uploads//customer-support-toolkit-directory.png'
                            }
                            name={'Jane Cooper'}
                            title={'CEO at ABC Corporation'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Product management</TestimonialHeading>
                            <TestimonialText>
                                Build products that drive impact and offer a strong product-market fit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://prod.smassets.net/assets/cms/sm/uploads//product-manager-toolkit-directory.png'
                            }
                            name={'Jane Cooper'}
                            title={'CEO at ABC Corporation'}
                        />
                    </Testimonial>
                </Stack>
            </Container>
        </Box>
    );
}