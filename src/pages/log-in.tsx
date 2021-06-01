// @ts-nocheck
/* Core */
import React, { FC } from 'react';

/* Components */
import { Nav } from '../components';
import { LoginForm } from '../components/forms/LoginForm';

export const LogInPage: FC = () => {
    return (
        <section className = 'layout'>
            <Nav />
            <LoginForm />
        </section>
    );
};
