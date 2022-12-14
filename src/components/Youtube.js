import React from 'react'
import { AspectRatio } from '@chakra-ui/react'
function Youtube() {
    return (
        <div>

            <AspectRatio maxW='560px' maxH="400px" ratio={1} >
                <iframe
                    title='naruto'
                    src='https://www.youtube.com/embed/WYSBlrjAeC4'
                    allowFullScreen
                />
            </AspectRatio>
        </div>
    )
}

export default Youtube