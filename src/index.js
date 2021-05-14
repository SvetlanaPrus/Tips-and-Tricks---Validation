/* Core */
import { render } from 'react-dom';

/* Components */
import { App } from './App';

/* Instruments */
import './theme/main.scss';
import { SettingsProvider } from './lib/settingsContext';

render(
    <SettingsProvider>
        <App />
    </SettingsProvider>,
    document.getElementById('root'),
);
