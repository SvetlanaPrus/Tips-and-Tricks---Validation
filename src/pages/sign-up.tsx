// @ts-nocheck
/* Core */
import React, { FC } from 'react';

/* Components */
import { Nav } from '../components';
import { SignUpForm } from '../components/forms/SignUpForm';

export const SignUpPage: FC = () => {
    return (
        <section className = 'layout'>
            <Nav />
            <SignUpForm />
        </section>
    );
};
