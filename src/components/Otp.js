import { useToast, WrapItem, Button, Wrap, useDisclosure, Box, Modal, ModalOverlay, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalFooter } from '@chakra-ui/react'
import React from 'react'
function OTPAlert() {
    const toast = useToast()
    const positions = [
        'top-right'
    ]

    return (
        <Wrap>
            {positions.map((position, i) => (
                <WrapItem key={i}>
                    <Button
                        colorScheme={"blue"}
                        onClick={() =>
                            toast({
                                // title: `${position} toast`,
                                title: "OTP has been sent",
                                position: position,
                                isClosable: true,
                            })
                        }
                    >
                        {/* Show {position} toast */}
                        Send OTP
                    </Button>
                </WrapItem>
            ))}
        </Wrap>
    )
}
export default OTPAlert;