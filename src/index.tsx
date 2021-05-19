/* Core */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/* Components */
import { App } from './App';

/* Instruments */
import './theme/main.scss';
import { SettingsProvider } from './lib/settingsContext';

render(
    <SettingsProvider>
        <Router>
            <App />
        </Router>
    </SettingsProvider>,
    document.getElementById('root'),
);
