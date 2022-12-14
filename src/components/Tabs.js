import React, { useState } from "react"
import { Tabs, TabList, Tab, TabPanel, Text, useColorModeValue, Box, SimpleGrid, TabPanels } from "@chakra-ui/react"
function TabSlider() {
    // const colors = useColorModeValue(
    //     ['#rgb(25 31 42)', 'rgb(25 31 42)', '#rgb(25 31 42)'],
    //     ['rgb(25 31 42)', 'rgb(25 31 42)', '#rgb(25 31 42)'],
    // )
    const [tabIndex, setTabIndex] = useState(0)
    // const bg = colors[tabIndex]
    return (
        <Tabs onChange={(index) => setTabIndex(index)}
        >
            <TabList >
                <Tab textAlign="center" margin='auto' fontSize="25px">Awareness</Tab>
                <Tab textAlign="center" margin='auto' fontSize="25px">Purchase</Tab>
                <Tab textAlign="center" margin='auto' fontSize="25px">Retention</Tab>
            </TabList>
            <TabPanels p='2rem'>
                <TabPanel>
                    <SimpleGrid columns={{
                        sm: '1',
                        base: '1',
                        md: '2',
                        lg: '2',
                        xl: '2',
                    }} spacing={10}>
                        <Box height='auto' paddingTop="50px">
                            <Text fontSize="23px " fontWeight="bold">Learn more about potential and existing customers</Text> <br /> <br />
                            <Text fontSize="21px " fontWeight="bold">Better understand your consumers</Text>
                            <Text fontSize="18px" >Survey your target market to better understand their behaviors, perceptions, and attitudes.</Text> <br /> <br />
                            <Text fontSize="21px " fontWeight="bold">Measure brand awareness and sentiment</Text>
                            <Text fontSize="18px">Find out what people think about your brand and discover new growth opportunities</Text> <br /> <br />
                            <Text fontSize="21px " fontWeight="bold">Better connect with customers</Text>
                            <Text fontSize="18px">Use feedback to tailor your communications, website experience, and even A/B test campaigns.</Text> <br /> <br />
                            <Text fontSize="21px " fontWeight="bold">Want to talk to consumers or prospects?</Text>
                            <Text fontSize="18px">Our plans and Audience panel makes it easy to check in with your market early and often.</Text>
                        </Box>
                        <Box height='auto' b bgColor='green.400' >
                            <img src="https://prod.smassets.net/assets/cms/sm/uploads//mp-customerfeedback-tab1.png" alt="" />
                        </Box>

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
                        <Box height='auto' paddingTop="50px">
                            <Text fontSize="23px " fontWeight="bold">Get actionable feedback at every transaction</Text> <br /> <br />
                            <Text fontSize="21px " fontWeight="bold">Learn what influences purchasing</Text>
                            <Text fontSize="18px" >Survey your target market to better understand their behaviors, perceptions, and attitudes.</Text> <br /> <br />
                            <Text fontSize="21px " fontWeight="bold">Identify pain points in your purchase flow</Text>
                            <Text fontSize="18px">Find out what people think about your brand and discover new growth opportunities</Text> <br /> <br />
                            <Text fontSize="21px " fontWeight="bold">Better connect with customers</Text>
                            <Text fontSize="18px">Use feedback to tailor your communications, website experience, and even A/B test campaigns.</Text> <br /> <br />
                            <Text fontSize="21px " fontWeight="bold">Want to talk to consumers or prospects?</Text>
                            <Text fontSize="18px">Our plans and Audience panel makes it easy to check in with your market early and often.</Text>
                        </Box>
                        <Box height='auto' b bgColor='green.400' >
                            <img src="https://prod.smassets.net/assets/cms/sm/uploads//mp-customerfeedback-tab2.png" alt="" />
                        </Box>

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
                        <Box height='auto' paddingTop="50px">
                            <Text fontSize="23px " fontWeight="bold">Give your customers extraordinary experiences</Text> <br /> <br />
                            <Text fontSize="21px " fontWeight="bold">Learn what influences purchasing</Text>
                            <Text fontSize="18px" >Survey your target market to better understand their behaviors, perceptions, and attitudes.</Text> <br /> <br />
                            <Text fontSize="21px " fontWeight="bold">Improve your offering with real-time feedback</Text>
                            <Text fontSize="18px">Find out what people think about your brand and discover new growth opportunities</Text> <br /> <br />
                            <Text fontSize="21px " fontWeight="bold">Better connect with customers</Text>
                            <Text fontSize="18px">Use feedback to tailor your communications, website experience, and even A/B test campaigns.</Text> <br /> <br />
                            <Text fontSize="21px " fontWeight="bold">Want to talk to consumers or prospects?</Text>
                            <Text fontSize="18px">Our plans and Audience panel makes it easy to check in with your market early and often.</Text>
                        </Box>
                        <Box height='auto' b bgColor='#53225b' >
                            <img src="https://prod.smassets.net/assets/cms/sm/uploads//mp-customerfeedback-tab4.png" alt="" />
                        </Box>

                    </SimpleGrid>
                </TabPanel>
            </TabPanels>
        </Tabs >
    )
}
export default TabSlider;