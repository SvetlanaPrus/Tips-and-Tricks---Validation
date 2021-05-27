// @ts-nocheck
/* Core */
import React, { FC, useContext } from 'react';

/* Components */
import { Tip } from './Tip';

/* Other */
import { TagContext } from '../../lib';
import { useTips } from '../../hooks';

/* Mock */
// import source from '../../mock-data/tips.json';

export const TipList: FC = ({ tipViewMode }) => {
    const [selectedTagId] = useContext(TagContext);
    const { data: source } = useTips();

    let tips = source;

    if (tipViewMode === 'topic-by-tag') {
        tips = source?.filter((tip) => tip.tag.id === selectedTagId);
    }

    const tipsJSX = tips?.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return (
        <section className = 'tip-list'>
            { tipsJSX }
        </section>
    );
};
