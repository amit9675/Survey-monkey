import React from 'react'
import { Box, Text, SimpleGrid } from '@chakra-ui/react'
function Help() {
    return (
        <>
            <Text fontSize='40px' fontWeight="bold" textAlign='center'>Join more than 17 million active users worldwide</Text> <br /> <br />
            <SimpleGrid columns={{
                sm: '2',
                base: '2',
                md: '4',
                lg: '5',
                xl: '5',
            }} spacing='40px'
                w="80%"
                margin='auto'
            >
                <Box height='80px'><img src="https://prod.smassets.net/assets/cms/sm/uploads//Allbirds-slate.png" alt="" /></Box>
                <Box height='80px'><img src="https://prod.smassets.net/assets/cms/sm/uploads//Tweezerman-logo-2x.png" alt="" /></Box>
                <Box height='80px'><img src="https://prod.smassets.net/assets/cms/sm/uploads//Adobe-logo-2x.png" alt="" /></Box>
                <Box height='80px'><img src="https://prod.smassets.net/assets/cms/sm/uploads//Verizon-logo-2x.png" alt="" /></Box>
                <Box height='80px'><img src="https://prod.smassets.net/assets/cms/sm/uploads//sephora-logo.png" alt="" /></Box>
            </SimpleGrid>
        </>
    )
}

export default Help