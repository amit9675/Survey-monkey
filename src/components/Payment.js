import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,

    PinInput, PinInputField, Alert
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { Link as RouterLink } from 'react-router-dom';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import PaymentAlert from '../components/PaymentAlert';
import OTPAlert from '../components/Otp';
export default function Payment() {

    return (
        <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
            <Flex>
                <Box
                    bg="#02054B"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4} marginTop={{ base: "70px", lg: "0px" }}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <div style={{ width: "300px", margin: "auto", padding: '15px', backgroundColor: "white", border: "2px solid white", borderRadius: '10px' }}>
                                        <img style={{ backgroundColor: "white", width: '220px' }} src="https://cdn.worldvectorlogo.com/logos/paystack-2.svg" alt="" />
                                    </div>

                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 100 }}>
                                        <div style={{ width: "250px" }}>
                                            <img style={{ width: '200px', height: '70px' }} src="https://1000logos.net/wp-content/uploads/2021/11/VISA-logo-500x281.png" alt="" />
                                            <img style={{ width: '200px', height: '70px' }} src="https://cdn.worldvectorlogo.com/logos/mastercard-2.svg" alt="" />
                                            <img style={{ width: '200px', height: '70px' }} src="https://cdn.worldvectorlogo.com/logos/rupay.svg" alt="" />
                                        </div>
                                    </Box>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg" w="400px">
                                    <Box m={8} color="#0B0E3F">
                                        <form class="row g-3">
                                            <div class="col-12">
                                                <label for="inputAddress2" class="form-label">Card Number</label>
                                                <input type="number" class="form-control" id="inputAddress2" placeholder="1234/1234/1234/1234" />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputCity" class="form-label">Name</label>
                                                <input type="text" class="form-control" id="inputCity" />
                                            </div>
                                            <div class="col-md-2">
                                                <label for="inputZip" class="form-label">CVV</label>
                                                <input style={{ width: "100px" }} type="number" class="form-control" id="inputZip" placeholder='123' />
                                            </div>
                                            <div class="col-12">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label class="form-check-label" for="gridCheck">
                                                        Verify your details
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                {/* <RouterLink to="/otpAuth"> */}
                                                {/* <button type="submit" class="btn btn-primary" >Send OTP</button> */}
                                                {/* </RouterLink> */}
                                                <OTPAlert />

                                            </div>
                                            <div >
                                                <Text textAlign="center" fontSize="20px">Enter OTP Here</Text>
                                                <PinInput otp >
                                                    <PinInputField style={{ backgroundColor: "#1a202c", color: "white" }} />
                                                    <PinInputField style={{ backgroundColor: "#1a202c", color: "white" }} />
                                                    <PinInputField style={{ backgroundColor: "#1a202c", color: "white" }} />
                                                    <PinInputField style={{ backgroundColor: "#1a202c", color: "white" }} />
                                                </PinInput>
                                            </div>
                                            <PaymentAlert />
                                            {/* <button type="submit" class="btn btn-primary" ><PaymentAlert /></button> */}
                                        </form>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>

        </Container>
    );
}