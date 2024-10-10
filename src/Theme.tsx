import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ThemeProvider from './pages/ThemeProvider';
import Navbar from './pages/Navbar';

const Theme = () => {
    return (
        <ThemeProvider>
                <Navbar />
                {/* <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/blog' element={<Blog />}></Route>
                    </Routes>
                </BrowserRouter> */}
        </ThemeProvider>
    )
}

export default Theme
