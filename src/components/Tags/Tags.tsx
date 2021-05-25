// @ts-nocheck
/* Core */
import React, {
    FC, useContext, useEffect,
} from 'react';

/* Components */
import { Tag } from './Tag';

/* Other */
import { TagContext } from '../../lib';

/* Mock */
import tags from '../../mock-data/tags.json';

export const Tags: FC = ({ tipViewMode }) => {
    const [selectedTagId, setSelectedTagId] = useContext(TagContext);

    useEffect(() => {
        if (!selectedTagId && Array.isArray(tags)) {
            setSelectedTagId(tags[ 0 ].id);
        }
    }, []);

    const handleTagClick = (id) => {
        setSelectedTagId(id);
    };

    const tagsJSX = tags?.map((tag) => <Tag
        key = { tag.id } { ...tag }
        dataActive = { tipViewMode === 'all-topics' || selectedTagId === tag.id }
        handleTagClick = { handleTagClick } />);

    return (
        <div className = 'tags'>
            { tagsJSX }
        </div>
    );
};
