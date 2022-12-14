import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Container, SimpleGrid, Box } from '@chakra-ui/react'
import Contactus from '../components/Contactus'
import Pricing2 from '../components/Pricing2'
import ThreeTierPricing from '../components/Pricing'
import FooterPart from '../components/FooterPart'
import LargeWithAppLinksAndSocial from '../components/Footer'
import Nav from '../components/Nav'
function Pricing() {
    return (
        <>
            <Nav />
            <div style={{ paddingTop: "90px" }}>
                <Container maxW="80%" margin="auto">
                    <Text fontSize="45px" fontWeight="bold" textAlign="center">Choose a plan that works for you</Text>
                    <Tabs variant='unstyled'>
                        <TabList paddingTop='50px'>
                            <Tab textAlign="center" margin="auto" _selected={{ color: 'white', bg: 'green.400' }}>Team Plans</Tab>
                            <Tab textAlign="center" margin="auto" _selected={{ color: 'white', bg: 'green.400' }}>Individual Plans</Tab>
                            <Tab textAlign="center" margin="auto" _selected={{ color: 'white', bg: 'green.400' }}>Enterprise</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Pricing2 />
                            </TabPanel>
                            <TabPanel>
                                <ThreeTierPricing />
                            </TabPanel>
                            <TabPanel>
                                <Contactus />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <br /> <br />
                    <Text fontSize="45px" fontWeight="bold" textAlign="center">SurveyMonkey Audience includes access to Paid Features</Text>
                    <br /> <br />
                    <SimpleGrid columns={{
                        sm: '1',
                        base: '1',
                        md: '2',
                        lg: '2',
                        xl: '2',
                    }} spacing={10}>
                        <Box height='auto' flex="3">
                            <img src="https://cdn.dribbble.com/users/2030807/screenshots/6927076/mobile-hand-msg.gif" alt="" />
                        </Box>
                        <Box height='auto' flex="7"> <FooterPart /></Box>

                    </SimpleGrid>  <br /> <br />
                    <LargeWithAppLinksAndSocial />
                </Container>
            </div>
        </>
    )
}

export default Pricing

