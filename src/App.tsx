// @ts-nocheck
/* Core */
import React from 'react';
import {
    Routes, Route, Outlet, Navigate,
} from 'react-router-dom';

/* Components */
import { Settings } from './components';
import {
    TipByIdPage, AllTopicsPage, TopicsByTagPage,
} from './pages';
import { LogInPage } from './pages/log-in';
import { SignUpPage } from './pages/sign-up';

export const App = () => {
    return (
        <>
            <Settings />

            <Routes>

                <Route path = '/all-topics' element = { <Outlet /> }>
                    <Route path = '/' element = { <AllTopicsPage /> } />
                    <Route path = '/:id' element = { <TipByIdPage /> } />
                </Route>

                <Route path = '/topics-by-tag' element = { <Outlet /> } >
                    <Route path = '/' element = { <TopicsByTagPage /> } />
                    <Route path = '/:id' element = { <TipByIdPage /> } />
                </Route>

                <Route path = '/login' element = { <Outlet /> } >
                    <Route path = '/' element = { <LogInPage /> } />
                </Route>

                <Route path = '/signup' element = { <Outlet /> } >
                    <Route path = '/' element = { <SignUpPage /> } />
                </Route>

                <Route path = '*' element = { <Navigate to = '/all-topics' /> } />
            </Routes>
        </>
    );
};
