import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchify, formatDate, getTagIcon } from '../../helpers';
import { useTipById } from '../../hooks/useTipById';
// import { useTipById } from '../../hooks/react-query/useTipById';

export const TipView = () => {
    const { id } = useParams();
    const { data: tipToView, isFetched } = useTipById(id);
    const navigate = useNavigate();

    useEffect(() => {
        if (!tipToView && isFetched) {
            navigate('..', { replace: true });
        }
    }, [tipToView, isFetched]);

    console.log(tipToView);
    const TagIcon = isFetched ? getTagIcon(tipToView?.tag.name) : () => null;

    const goBack = () => {
        navigate('..');
    };

    return (
        <>
            <article>
                <header>
                    <TagIcon /> <h1>{ fetchify(isFetched, tipToView?.title) }</h1>
                </header>

                <main>
                    <time>
                        <TagIcon />
                        <div>
                            <span>🚀 { fetchify(false, formatDate(tipToView?.created)) }</span>
                            <span>👨🏼‍🚀 Автор: { fetchify(false, tipToView?.author) }</span>
                        </div>
                    </time>
                </main>
                <footer>
                    <a onClick = { goBack }>&larr;&nbsp;Назад</a>
                </footer>
            </article>

            <main>{ fetchify(false, tipToView?.body) }</main>
        </>
    );
};
