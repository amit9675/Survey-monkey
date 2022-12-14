import React, { useState } from 'react'
import "../css/Overflow.css"
import { Text, Container } from '@chakra-ui/react'
import Team from '../components/Team'
export function Overflow() {

    return (
        <>
            <div className='cont1' style={{ overflow: "scroll", position: "static", width: "100%", height: "450px", }}>

                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//customer-satisfaction-survey-template-1.png " alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//Product-Survey.png" alt="" />
                </div>
                <div className='cont'>
                    <img src=" https://prod.smassets.net/assets/cms/sm/uploads//360-Degree-Employee-Evaluation.png" alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//Brand-Awareness.png" alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//product-testing-survey-template.png" alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//employee-engagement-survey-template.png" alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//Website_surveys.png" alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//management-performance-survey-template.png " alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//software-evaluation-survey-template.png" alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//online-shopping-attitudes-survey-template.png" alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//customer-service-feedback-survey-template.png" alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//team-performance-survey-template.png" alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//employee-exit-survey-template.png" alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//work-environment-survey-template.png " alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//customer-satisfaction-survey-template-1.png " alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//Product-Survey.png" alt="" />
                </div>
                <div className='cont'>
                    <img src=" https://prod.smassets.net/assets/cms/sm/uploads//360-Degree-Employee-Evaluation.png" alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//Brand-Awareness.png" alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//product-testing-survey-template.png" alt="" />
                </div>
                <div className='cont'>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//employee-engagement-survey-template.png" alt="" />
                </div>
            </div>
            {/* <Container>
                <Team />
            </Container> */}
        </>
    )
}

export default Overflow