import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import Login from './Login/Login';
import Register from './Registration/Registration';
import Dashboard from './Dashboard/Dashboard';

function MainRouter () {
        return (
            <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                   
                </Routes>
            </Router>
            </>
        );
    
}

export default MainRouter;