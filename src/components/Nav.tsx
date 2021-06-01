// @ts-nocheck
/* Core */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

/* Other */
import { icons } from '../theme/icons/nav';
import { Context } from '../lib';

export const Nav = () => {
    const [isSettingsOpen, setSettingsOpen] = useContext(Context);

    const handleSettingsClick = (event) => {
        event.preventDefault();

        setSettingsOpen(true);
    };

    return (
        <nav className = 'nav'>
            <h1>Т и Т</h1>
            <NavLink to = '/all-topics'>
                <icons.Home /> Все темы
            </NavLink>
            <NavLink to = '/topics-by-tag'>
                <icons.Tag /> По тэгам
            </NavLink>
            <NavLink to = ''>
                <icons.Publish /> Опубликовать
            </NavLink>
            <a className = { isSettingsOpen ? 'active' : '' } onClick = { handleSettingsClick }>
                <icons.Settings />Настройки
            </a>
            <NavLink to = '/login'>
                <icons.Bolt /> Войти
            </NavLink>
            <NavLink to = ''>
                <icons.Profile /> Профиль
            </NavLink>
            <NavLink to = ''>
                <icons.Logout /> Выйти
            </NavLink>
        </nav>
    );
};
