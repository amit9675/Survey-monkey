import React from 'react'
import { Container, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'
import Overflow from '../components/Overflow'
import Team from '../components/Team'
import ProductHome from '../components/Productshome'
import Help from "../components/Help"
import "../css/Products.css"
import ProductHome2 from '../components/productshome2'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
function Products() {
    return (
        <div>
            <Nav />
            <Container maxW="100%">
                <ProductHome />
                <ProductHome2 />
                <Text textAlign="center" fontSize="45px" fontWeight="bold">Start with a template</Text>
                <Text textAlign="center" fontSize="30px" >Create, launch, and collect responses faster with our expert-written templates.</Text> <br />
                <Flex gap="25px" w="80%" margin="auto">
                    <img className='image' src="https://media1.giphy.com/media/oB6KlAvOuaLtxYy8l4/giphy.webp?cid=ecf05e4735ifaspblljwyyszeu0uvkrzupzchvyrrgzc2y3r&rid=giphy.webp&ct=g" alt="" />
                    <Overflow />
                </Flex>

                <Team /> <br /> <br />
                <Help />
            </Container>
            <br /> <br />
            <Footer />

        </div>
    )
}

export default Products