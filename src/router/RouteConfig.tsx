import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
const RoutesConfig = () => {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesConfig