import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Divider,
    useBreakpointValue,
    Center,
    Box,
    SimpleGrid,
    useColorModeValue,
    Icon,
    List,
    Card, CardHeader, CardBody, CardFooter, StackDivider,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    Grid, GridItem,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Checkbox,
    AspectRatio,

} from '@chakra-ui/react';
import Carasoul from '../components/Carasoul';
import LargeWithAppLinksAndSocial from "../components/Footer"
import { CheckCircleIcon } from "@chakra-ui/icons"
import PriceWrapper from "../components/Pricing"
import '../css/Home.css'
import Nav from '../components/Nav';
export default function Home() {
    return (
        <>
            <Nav />
            <Stack paddingTop="50px" direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'blue.400',
                                    zIndex: -1,
                                }}>
                                Get Answers
                            </Text>
                            <br />{' '}
                            <Text color={'blue.400'} as={'span'}>
                                With Surveys
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                            The project board is an exclusive resource for contract work. It's
                            perfect for freelancers, agencies, and moonlighters.
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <Button
                                rounded={'full'}
                                bg={'blue.400'}

                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Go Premium
                            </Button>

                            <Button rounded={'full'}>Create Free Account</Button>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            'https://prod.smassets.net/assets/cms/sm/uploads//sem-hero-man.png'
                        }

                    />

                </Flex>
            </Stack>
            <br /> <br />
            <div style={{ width: "80%", margin: "auto" }} >
                <Center fontSize="25px" bg='teal' h='50px' color='white'>
                    Who is your survey audience?
                </Center> <br />
                <Tabs isFitted variant='enclosed'>
                    <TabList mb='1em'>
                        <Tab>Employee</Tab>
                        <Tab>Customers</Tab>
                        <Tab>Target Markets</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel >
                            <SimpleGrid columns={{
                                sm: '1',
                                base: '1',
                                md: '2',
                                lg: '2',
                                xl: '2',
                            }} spacing={10}>
                                <Box className='box' height='auto'><img className='image' src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/eccfe335-ce19-4649-8875-b1376845422c/resources-wrike-lightspeed-platform-marketers-2x.png" alt="" _hover={"transform: scale(1)}"} />  <br />
                                    <Text as='mark' textDecoration="underline" fontSize='sm'>EMPLOYEE FEEDBACK</Text> <br />
                                    <Text as='i' fontSize='md'>Build a better workplace by hearing from your employees.</Text></Box>
                                <Box className='box' height='auto'><img className='image' src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/7a9bcbf9-d294-4664-808c-56d2aaaa4e0f/resources-blog-work-your-way-2x.png" alt="" />  <br />
                                    <Text as='mark' textDecoration="underline" fontSize='sm'>TEMPLATE </Text> <br />
                                    <Text as='i' fontSize='md'>Learn how employees feel with Employee Engagement Surveys.</Text></Box>
                            </SimpleGrid>
                        </TabPanel>
                        <TabPanel>
                            {/* <p>two!</p> */}
                            <SimpleGrid columns={{
                                sm: '1',
                                base: '1',
                                md: '2',
                                lg: '2',
                                xl: '2',
                            }} spacing={10}>
                                <Box className='box' height='auto'><img className='image' src="https://web-static.wrike.com/cdn-cgi/image/width=522,fit=cover,format=auto,q=80/content/uploads/2022/09/image-2.png?av=cbbff13eccb4554edc7e4e1c13bd3733" alt="" _hover={"transform: scale(1)}"} />  <br />
                                    <Text as='mark' textDecoration="underline" fontSize='sm'>EMPLOYEE FEEDBACK</Text> <br />
                                    <Text as='i' fontSize='md'>Build a better workplace by hearing from your employees.</Text></Box>
                                <Box className='box' height='auto'><img className='image' src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=615,dpr=2/tp/storage/uploads/af67bde2-0417-4ebd-917e-de500cf395fb/hp-evo-support-2x.png" alt="" />  <br />
                                    <Text as='mark' textDecoration="underline" fontSize='sm'>TEMPLATE </Text> <br />
                                    <Text as='i' fontSize='md'>Learn how employees feel with Employee Engagement Surveys.</Text></Box>
                            </SimpleGrid>
                        </TabPanel>
                        <TabPanel>
                            <SimpleGrid columns={{
                                sm: '1',
                                base: '1',
                                md: '2',
                                lg: '2',
                                xl: '2',
                            }} spacing={10}>
                                <Box className='box' height='auto'><img className='image' src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/ca21cd92-525e-4d4c-8837-3c143b2aba1b/resources-marketing-kit-2x.png" alt="" _hover={"transform: scale(1)}"} />  <br />
                                    <Text as='mark' textDecoration="underline" fontSize='sm'>EMPLOYEE FEEDBACK</Text> <br />
                                    <Text as='i' fontSize='md'>Build a better workplace by hearing from your employees.</Text></Box>
                                <Box className='box' height='auto'><img className='image' src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/ca21cd92-525e-4d4c-8837-3c143b2aba1b/resources-cit-2-2x.png" alt="" />  <br />
                                    <Text as='mark' textDecoration="underline" fontSize='sm'>TEMPLATE </Text> <br />
                                    <Text as='i' fontSize='md'>Learn how employees feel with Employee Engagement Surveys.</Text></Box>
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs> <br /> <br />
                <Text fontSize='35px' textAlign='center'>Join more than 17 million active users worldwide</Text> <br /> <br />
                <SimpleGrid columns={{
                    sm: '2',
                    base: '2',
                    md: '4',
                    lg: '5',
                    xl: '5',
                }} spacing='40px'>
                    <Box height='80px'><img src="https://prod.smassets.net/assets/cms/sm/uploads//Allbirds-slate.png" alt="" /></Box>
                    <Box height='80px'><img src="https://prod.smassets.net/assets/cms/sm/uploads//Tweezerman-logo-2x.png" alt="" /></Box>
                    <Box height='80px'><img src="https://prod.smassets.net/assets/cms/sm/uploads//Adobe-logo-2x.png" alt="" /></Box>
                    <Box height='80px'><img src="https://prod.smassets.net/assets/cms/sm/uploads//Verizon-logo-2x.png" alt="" /></Box>
                    <Box height='80px'><img src="https://prod.smassets.net/assets/cms/sm/uploads//sephora-logo.png" alt="" /></Box>
                </SimpleGrid> <br /> <br />

                <PriceWrapper />

                <Text fontSize="35px" textAlign="center">Need an enterprise-grade solution? </Text> <br />
                <Text maxW="75%" margin="auto" color='gray' fontSize='20px' textAlign='center'> <span textDecoration="underline" color='blue'>SurveyMonkey Enterprise </span> empowers organizations to gain insights from customers, employees, and the market—securely and at scale.</Text> <br /> <br />
                <SimpleGrid columns={{
                    sm: '1',
                    base: '1',
                    md: '1',
                    lg: '2',
                    xl: '2',
                }} spacing={20} >
                    <Box height='auto'><Text fontSize='30px'>Contact us Today !</Text><br />
                        <List spacing={3}>
                            <ListItem fontWeight='500' fontStyle='oblique'>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Manage multiple users and gain visibility into all survey data collected across your organization with admin controls and dashboards.
                            </ListItem>
                            <ListItem fontWeight='500' fontStyle='oblique'>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Ensure confidential data is protected with enhanced security including encryption, SSO, and features that help you remain compliant with HIPAA and GDPR.
                            </ListItem>
                            <ListItem fontWeight='500' fontStyle='oblique'>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Make feedback automated and actionable by connecting to key business systems using APIs and powerful integrations, including Salesforce, Marketo, Tableau, and more.
                            </ListItem>

                        </List>
                        <br />
                        <AspectRatio maxW='660px' ratio={1}>
                            <iframe height="480" width="500"
                                src="https://www.youtube.com/embed/hCDBt_vDu_Y">
                            </iframe>
                        </AspectRatio></Box>
                    <Box height='auto' >
                        <Text fontSize='30px'>Enter Some Details</Text><br />
                        <FormControl>
                            <FormLabel>First Name</FormLabel>
                            <Input type='text' required />
                            <FormHelperText>Enter your first name</FormHelperText>
                            <FormLabel>Last Name</FormLabel>
                            <Input type='text' required />
                            <FormHelperText>Enter your last name</FormHelperText>
                            <FormLabel>Business Email</FormLabel>
                            <Input type='email' required />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                            <FormLabel>Phone Number</FormLabel>
                            <Input type='number' required />
                            <FormHelperText>Enter your phone number</FormHelperText>
                            <FormLabel>Country</FormLabel>
                            <Input type='text' required />
                            <FormHelperText>Enter your country name</FormHelperText> <br />
                            <Checkbox size='md' colorScheme='green' defaultChecked>

                            </Checkbox>
                            <Text>I wish to receive other information about Momentive like product updates, news, information, and special promotions.
                                Visit the Privacy Notice for information on how we use your information.
                                You can unsubscribe anytime using a link at the bottom of our communications.</Text> <br />
                            <Button colorScheme='whatsapp'>Contact Now</Button>
                        </FormControl></Box>

                </SimpleGrid>
                <Center height='50px' color='teal'>
                    <Divider orientation='vertical' />
                </Center>
                <Stack paddingTop="50px" direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Card divider={<StackDivider />} spacing='4' backgroundImage="url('https://prod.smassets.net/assets/cms/sm/uploads//welcome-sem-video-bg.png')"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat">
                            <CardHeader>
                                <Heading size='lg'>Everything you need to <br /> create the best surveys</Heading>
                            </CardHeader>

                            <CardBody>
                                <Stack >
                                    <Box >
                                        <Heading size='xs' >
                                            Get access to survey templates that speak to customers, employees, or your target audience.
                                        </Heading>
                                        <Heading fontSize='xs'>
                                            Choose from expert-written sample questions to include in your surveys.
                                        </Heading>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' >
                                            Score your surveys to estimate their success rates with SurveyMonkey Genius.
                                        </Heading>
                                        <Heading fontSize='xs'>
                                            Check out the overview of your clients.
                                        </Heading>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' >
                                            Explore our best practices for creating the even the most sophisticated surveys.
                                        </Heading>
                                        <Heading fontSize='xs'>
                                            See a detailed analysis of all your business clients.
                                        </Heading>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card>

                    </Flex>
                    <Flex flex={1} backgroundImage="url('https://prod.smassets.net/assets/cms/sm/uploads//welcome-sem-video-bg.png')"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat">
                        <Image
                            alt={'Login Image'}
                            objectFit={'cover'}
                            src={
                                'https://prod.smassets.net/assets/cms/sm/uploads//sem-videotest-wistia-v6.png'
                            }

                        />

                    </Flex>
                </Stack>
                <br /> <br />

                <LargeWithAppLinksAndSocial />
            </div>

        </>
    );
}