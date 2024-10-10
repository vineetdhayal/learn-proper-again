import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Router, Routes, Navigate } from 'react-router-dom'
// import Home from './bread-crumb/Home'
import ProductListing from './bread-crumb/ProductListing'
import ProductDetails from './bread-crumb/ProductDetails'
import BreadCrumb from './BreadCrumb';
import Firstt from './Firstt';
import Buttons from './Buttons';

const Product = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Buttons />}></Route>
                <Route path='/firstt' element={<Firstt />}></Route>
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default Product
