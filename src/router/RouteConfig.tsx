import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import RequestList from '../pages/RequestList';
const RoutesConfig = () => {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/request-list/:requestype" element={<RequestList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesConfig