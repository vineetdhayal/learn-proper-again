import React from 'react'
import { BrowserRouter, Routes, Route, useParams, Link, useLocation } from 'react-router-dom'

const Home = () => {
    const params = useParams();
    console.log(params);
    return <div>Home</div>
}

const Tell = () => {
    return <div>Tell</div>
}

const Switch = () => {
    const data = useLocation();
    console.log(data);
    return <div>
        <Link to='/'>Tell</Link>
    </div>
}

const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/user/:userId' element={<Home />}></Route>
                    <Route path='/' element={<Tell />}></Route>
                    <Route path='/switch' element={<Switch />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main
