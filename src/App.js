/* Core */
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

/* Components */
import { HomePage } from './pages';
import { Settings } from './components';

export const App = () => {
    return (
        <>
            <Settings />
            <HomePage/>
        </>
    );
};
