import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import JoinOurTeam from '../pages/Signup'
import Pricing from '../pages/Pricing'
import Products from "../pages/Products"
import Solutions from '../pages/Solutions'
import NotFound from '../components/Notfound'
import Private from '../components/Private'
import Payment from '../components/Payment'
import PaymentAlert from '../components/PaymentAlert'
import Demo from '../components/Demo'
function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<JoinOurTeam />} />
                <Route path='/pricing' element={<Private> <Pricing /> </Private>} />
                <Route path='/products' element={<Private><Products /></Private>} />
                <Route path='/solutions' element={<Private><Solutions /></Private>} />
                <Route path='/payment' element={<Private><Payment /></Private>} />
                <Route path='/exlore' element={<Demo />} />
                <Route path='/notfound' element={<NotFound />} />
            </Routes>

        </div>
    )
}

export default AllRoutes