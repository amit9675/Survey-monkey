import {
    Box,
    Button,
    Divider,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const options = [
    { id: 1, desc: 'Survey sharing with fine control over who can view and edit' },
    { id: 2, desc: 'Gather comments all in one place' },
    { id: 3, desc: ' Let team members analyze, filter, and export results' },
];
const options2 = [
    { id: 1, desc: 'Survey sharing with fine control over who can view and edit' },
    { id: 2, desc: 'Gather comments all in one place' },
    { id: 3, desc: ' Let team members analyze, filter, and export results' },
    { id: 4, desc: '100,000 responses per year**' },
    { id: 5, desc: 'Free integrations with popular collaboration apps' },
];
const options3 = [
    { id: 1, desc: 'Survey sharing with fine control over who can view and edit' },
    { id: 2, desc: 'Gather comments all in one place' },
    { id: 3, desc: ' Let team members analyze, filter, and export results' },
    { id: 4, desc: '100,000 responses per year**' },
    { id: 5, desc: 'Free integrations with popular collaboration apps' },
    { id: 6, desc: '100,000 responses per year**' },
    { id: 7, desc: 'Free integrations with popular collaboration apps' },
];

const PackageTier = ({
    title,
    options,
    typePlan,
    checked = false,
}) => {
    const colorTextLight = checked ? 'white' : 'purple.600';
    const bgColorLight = checked ? 'purple.400' : 'gray.300';

    const colorTextDark = checked ? 'white' : 'purple.500';
    const bgColorDark = checked ? 'purple.400' : 'gray.300';

    return (
        <Stack
            p={3}
            py={3}
            justifyContent={{
                base: 'flex-start',
                md: 'space-around',
            }}
            direction={{
                base: 'column',
                md: 'row',
            }}
            alignItems={{ md: 'center' }}>
            <Heading size={'md'}>{title}</Heading>
            <List spacing={3} textAlign="start">
                {options.map((desc, id) => (
                    <ListItem key={desc.id}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        {desc.desc}
                    </ListItem>
                ))}
            </List>
            <Heading size={'xl'}>{typePlan}</Heading>
            <Stack>
                <Button
                    size="md"
                    color={useColorModeValue(colorTextLight, colorTextDark)}
                    bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
                    See all plans
                </Button>
            </Stack>
        </Stack>
    );
};
const Pricing2 = () => {
    return (
        <Box py={6} px={5} min={'100vh'}>
            <Stack spacing={4} width={'100%'} direction={'column'}>
                <Stack
                    p={5}
                    alignItems={'center'}
                    justifyContent={{
                        base: 'flex-start',
                        md: 'space-around',
                    }}
                    direction={{
                        base: 'column',
                        md: 'row',
                    }}>
                    <Stack
                        width={{
                            base: '100%',
                            md: '40%',
                        }}
                        textAlign={'center'}>
                        <Heading size={'lg'}>
                            Want to know more plans  <Text color="purple.400">Swipe Right</Text>
                        </Heading>
                    </Stack>
                </Stack>
                <Divider />
                <PackageTier title={'TEAM ADVANTAGE'} typePlan="Rs 1550/Month" options={options} />
                {/* <PackageTier title={'TEAM ADVANTAGE'} typePlan="Rs 1550/Month" options="lot of benefits" /> */}
                <Divider />
                <PackageTier
                    title={'TEAM PREMIER'}
                    checked={true}
                    typePlan="Rs 3800/Month"
                    options={options2}
                />
                <Divider />
                <PackageTier title={'ENTERPRICES'} typePlan="Rs 4350/Month" options={options3} />
            </Stack>
        </Box>
    );
};

export default Pricing2;