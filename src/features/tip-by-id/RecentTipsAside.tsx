// @ts-nocheck
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import data from '../../mock-data/tips.json';
import { formatDate, getTagIcon, sortByDate } from '../../helpers';

export const RecentTipsAside: FC = () => {
    const tips = data;

    // ***Check later. Check timeDate.
    const tipsList = tips.sort(sortByDate).slice(0, 5).map((el) => {
        const TagIcon = getTagIcon(el.tag.name);

        return (
            <Link key = { el.id } to = { `/topics-by-tag/${el.id}` } >
                <h3> { el.title } </h3>
                <time>
                    <TagIcon />
                    { formatDate(el.created) }
                </time>
            </Link>);
    });

    return (
        <aside className = 'recent-tips'>
            <h1>Свежие типсы</h1>
            { tipsList }
        </aside>
    );
};
