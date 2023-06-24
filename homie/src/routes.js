import React from "react";
import {Routes,Route} from 'react-router-dom';
import { HomePage } from "./Frontend/pages/HomePage";
import Login from "./Frontend/pages/login";
import { ServicePage } from "./Frontend/pages/ServicePage";
import { ServiceProducerPage } from "./Frontend/pages/ServiceProducerPage";
import Signup from "./Frontend/pages/signup";

export const RouterPath = () => {
    return(
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/services" element={<ServicePage/>}/>
            <Route path="/sevice-accepted" element={<ServiceProducerPage/>}/>

        </Routes>
    )
}