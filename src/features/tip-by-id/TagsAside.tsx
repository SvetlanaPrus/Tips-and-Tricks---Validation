// @ts-nocheck
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TagContext } from '../../lib';
import tags from '../../mock-data/tags.json';
import { Tag } from '../../components/Tags/Tag';

export const TagsAside = () => {
    const [selectedTagId, setSelectedTag] = useContext(TagContext);

    useEffect(() => {
        if (!selectedTagId && Array.isArray(tags)) {
            setSelectedTag(tags[ 0 ].id);
        }
    }, []);

    function handleTagClick(id) {
        setSelectedTag(id);
    }

    const tagsList = tags?.map((el) => <Link key = { el.id } to = '/topics-by-tag'>
        <Tag
            key = { el.id } { ...el }
            handleTagClick = { () => handleTagClick(el.id) } />
    </Link>);

    return (
        <aside className = 'tags-aside'>
            <div className = 'tags'>
                <h1>Тэги</h1>
                <div>
                    { tagsList }
                </div>
            </div>
        </aside>
    );
};
