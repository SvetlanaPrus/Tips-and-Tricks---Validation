//@ts-nocheck
/* Core */
import { useContext, useEffect } from 'react';

/* Instruments */
import { Context } from '../lib/settingsContext';

export const Settings: React.FC = () => {
    const [isSettingsOpen, setSettingsOpen] = useContext(Context);

    return (
        <section className={`settings ${isSettingsOpen ? 'open' : 'closed'}`}>
            <header>
                <h1>Настройки</h1>
            </header>

            <footer>
                <button onClick={() => setSettingsOpen(false)}>Закрыть</button>
            </footer>
        </section>
    );
};
