// @ts-nocheck
import React from 'react';
import { Hero, Nav, TipList } from '../components';

export const AllTopicsPage = () => {
    return (
        <>
            <section className = 'layout'>
                <Nav />
                <Hero tipViewMode = 'all-topics' />
                <TipList tipViewMode = 'all-topics' />
            </section>
        </>
    );
};
