import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

// interface FeatureProps {
//     title: string;
//     text: string;
//     icon: ReactElement;
// }

const Feature = ({ title, text, icon }) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};

export default function Services() {
    return (
        <Box p={4} w="80%" margin="auto">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    title={'Customer service'}
                    text={
                        'Improve your customer experience by assessing your customer service and call center effectiveness.'
                    }
                />
                <Feature
                    icon={<Icon as={FcDonate} w={10} h={10} />}
                    title={'Products and services'}
                    text={
                        'Ask your customers for feedback on your products and services to find out where and how to improve.'
                    }
                />
                <Feature
                    icon={<Icon as={FcInTransit} w={10} h={10} />}
                    title={'Instant Delivery'}
                    text={
                        'Prevent churn and improve repeat business. Identify customer loyalty trends and find out how to improve your offering.'
                    }
                />
            </SimpleGrid>
        </Box>
    );
}