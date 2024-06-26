import React from 'react';
import Signin from "./Components/Signin/Signin";
import {Route, Routes} from "react-router-dom";
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import FileData from "./Components/FileData/FileData";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import LogRocket from 'logrocket';

const App = () => {
    console.log(window.location.hostname);
    if (!window.location.hostname.includes("localhost")) {
        LogRocket.init('5xrm0w/lemidai');
    }

    return (
        <Routes>
            <Route path="/" element={<Signin/>}/>
            <Route path="/mainPage" element={
                <PrivateRoute>
                    <MainPage/>
                </PrivateRoute>
            }/>
            <Route path="/fileData" element={
                <PrivateRoute>
                    <FileData/>
                </PrivateRoute>
            }/>
        </Routes>
    );
}

export default App;
