/* Core */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/* Components */
import { App } from './App';

/* Instruments */
import './theme/main.scss';
import { SettingsProvider, SelectedTagProvider } from './lib';

render(
    <SelectedTagProvider>
        <SettingsProvider>
            <Router>
                <App />
            </Router>
        </SettingsProvider>
    </SelectedTagProvider>,
    document.getElementById('root'),
);
