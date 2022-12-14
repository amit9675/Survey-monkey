import React from 'react'
import Nav from '../components/Nav'
import { SimpleGrid, Box, Text } from '@chakra-ui/react'
import Solutionshome from '../components/Solotionshome'
import Card1 from '../components/card1'
import Card2 from '../components/card2'
import TabSlider from '../components/Tabs'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Carasoul from '../components/Carasoul'
import Youtube from '../components/Youtube'
function Solutions() {
    return (
        <div>
            <Nav />
            <Solutionshome />
            <Text fontSize="35px" marginTop="-130px" fontWeight="bold" textAlign="center">Product Concept Analysis</Text> <br />
            <SimpleGrid columns={{
                sm: '1',
                base: '1',
                md: '2',
                lg: '2',
                xl: '2',
            }} spacing={10}
            >
                <Box height='auto'>
                    <Carasoul />
                </Box>
                <Box height='auto' >
                    <Youtube />
                </Box>

            </SimpleGrid>

            <br /> <br /> <br />
            <hr style={{ height: "15px", color: "green.400", backgroundColor: "black" }} />
            <br /> <br /> <br />

            <TabSlider /> <br /> <br />
            <SimpleGrid columns={{
                sm: '1',
                base: '1',
                md: '2',
                lg: '2',
                xl: '2',
            }} spacing={10}
            >
                <Box height='auto'>
                    <Card1 />
                </Box>
                <Box height='auto'>
                    <Card2 />
                </Box>

            </SimpleGrid> <br /> <br />
            <Services /> <br /> <br />
            <Footer />
        </div>
    )
}

export default Solutions