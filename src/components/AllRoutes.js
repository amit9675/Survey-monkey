import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import JoinOurTeam from '../pages/Signup'
import Pricing from '../pages/Pricing'
import Products from "../pages/Products"
import Solutions from '../pages/Solutions'
function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<JoinOurTeam />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/products' element={<Products />} />
                <Route path='/solutions' element={<Solutions />} />
            </Routes>

        </div>
    )
}

export default AllRoutes