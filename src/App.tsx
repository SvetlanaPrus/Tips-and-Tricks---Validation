/* Core */
import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

/* Components */
import { HomePage } from './pages';
import { Settings } from './components';
import { TipByIdPage } from './pages/tip-by-id';
import { AllTopicsPage } from './pages/all-topics';

export const App = () => {
    return (
        <>
            <Settings />
            
            <Routes>
                <Route path="/home" element ={<HomePage/>}/>
                <Route path="/all-topics" element ={<Outlet/>}>
                    <Route path = "/" element={<AllTopicsPage/>}/>
                    <Route path = "/:id" element={<TipByIdPage/>}/>
                </Route>
            </Routes>
        </>
    );
};
