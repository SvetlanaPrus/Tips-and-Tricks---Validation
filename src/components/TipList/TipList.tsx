// @ts-nocheck
/* Core */
import { FC, useContext } from 'react';

/* Components */
import { Tip } from './Tip';

/* Other */
import { TagContext } from '../../lib';

/* Mock */
import source from '../../mock-data/tips.json';

export const TipList: FC = ({ tipViewMode }) => {
    const [selectedTagId] = useContext(TagContext);
    let tips = source;

    if (tipViewMode === 'topic-by-tag') {
        tips = source?.filter((tip) => tip.tag.id === selectedTagId);
    }

    const tipsJSX = tips.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return (
        <section className = 'tip-list'>
            { tipsJSX }
        </section>
    );
};
