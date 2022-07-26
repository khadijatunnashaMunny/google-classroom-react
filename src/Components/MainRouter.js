import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import Login from './Login/Login';
import Register from './Registration/Registration';
import Dashboard from './Dashboard/Teams/Teams';
import Grade from './Dashboard/Grade/Grade';

function MainRouter () {
        return (
            <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/grade" element={<Grade />} />
                </Routes>
            </Router>
            </>
        );
    
}

export default MainRouter;