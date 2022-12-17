import { useToast, WrapItem, Button, Wrap, useDisclosure, Box, Modal, ModalOverlay, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalFooter } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
// function PaymentAlert() {
//     const toast = useToast()
//     const positions = [
//         'top-right'
//     ]

//     return (
//         <Wrap>
//             {positions.map((position, i) => (
//                 <WrapItem key={i}>
//                     <Button
//                         onClick={() =>
//                             toast({
//                                 title: `${position} toast`,
//                                 position: position,
//                                 isClosable: true,
//                             })
//                         }
//                     >
//                         Show {position} toast
//                     </Button>
//                 </WrapItem>
//             ))}
//         </Wrap>
//     )
// }
// export default PaymentAlert;

function PaymentAlert() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (
        <>
            {/* <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
               
            </Box> */}

            <Button mt={4} onClick={onOpen} colorScheme="blue">
                Verify OTP
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Order Successfull</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <Lorem count={2} /> */}
                        Hurry ! This Subscription is added to your account
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <RouterLink to="/exlore">
                            <Button colorScheme='blue' mr={3}>
                                Explore your Features
                            </Button>
                        </RouterLink>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default PaymentAlert;