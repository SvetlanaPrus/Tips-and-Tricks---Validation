// @ts-nocheck
/* Core */
import { useContext } from 'react';

import { icons } from "../theme/icons/nav";
import { Context } from '../lib/settingsContext';

export const Nav = () => {
    const [isSettingsOpen, setSettingsOpen] = useContext(Context);

    const handleSettingsClick = (event) => {
        event.preventDefault();

        setSettingsOpen(true);
    }

    return (
        <nav className="nav">
            <h1>Т и Т</h1>
            <a>
                <icons.Home/> Все темы
            </a>
            <a>
                <icons.Tag/> По тэгам
            </a>
            <a
                className={isSettingsOpen ? 'active' : ''}
                onClick={handleSettingsClick}>
                <icons.Settings />
                Настройки
            </a>
            <a>Опубликовать</a>
            <a>Поиск</a>
        </nav>
    )
}