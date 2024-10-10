import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Product from '../Product'
import Listing from './Listing'
import BreadCrumbs from './BreadCrumbs'

const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <BreadCrumbs />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/products' element={<Product />}></Route>
                    <Route path='/products/:id' element={<Listing />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main
