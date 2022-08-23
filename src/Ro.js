import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Tests from './Test';
import Tayang from './Tayang';
import Taeeum from './Taeeum';
import Soyang from "./Soyang";
import Soeeum from "./Soeeum";
import ERR from "./ERROR";

function Ro() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="test" element={<Tests />} />
                    <Route path="tayang" element={<Tayang />} />
                    <Route path="taeeum" element={<Taeeum />} />
                    <Route path="soyang" element={<Soyang />} />
                    <Route path="soeeum" element={<Soeeum />} />
                    <Route path="*" element={<ERR />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Ro;
