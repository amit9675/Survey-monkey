import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = Array.apply(null, Array(4)).map(function (x, i) {
    return {
        id: i,
        title: 'Unlimited number of surveys',
        text: 'Unlimited responses',
        text2: 'Data exports (CSV, PDF, PPT, XLS)'
    };
});

export default function FooterPart() {
    return (
        <Box p={4}>
            {/* <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>This is the headline</Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.
                </Text>
            </Stack> */}
            {/* <Heading fontSize={'3xl'}>This is the headline</Heading> */}
            <Container maxW={'6xl'} >
                <SimpleGrid columns={{
                    sm: '1',
                    base: '1',
                    md: '2',
                    lg: '2',
                    xl: '2',
                }} spacing={10}>
                    {features.map((feature) => (
                        <HStack key={feature.id} align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600}>{feature.title}</Text>
                                <Text color={'gray.600'}>{feature.text}</Text>
                                <Text color={'gray.600'}>{feature.text2}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}