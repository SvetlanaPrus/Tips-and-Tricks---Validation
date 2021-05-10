/* Core */
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

/* Components */

import {HomePage} from './pages/home';

export const App = () => {
    return (
        <>
           <HomePage/>
        </>
    );
};
