// @ts-nocheck
/* Core */
import React, { FC, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

/* Components */
import { Tag } from '../../components';

/* Instruments */
import { TagContext } from '../../lib';
import { getTagIcon } from '../../helpers';

/* Mock */
import { useTags } from '../../hooks';

export const TagsAside: FC = observer(() => {
    const { data: tags } = useTags();
    const [selectedTagId, setSelectedTagId] = useContext(TagContext);

    useEffect(() => {
        if (!selectedTagId && Array.isArray(tags)) {
            setSelectedTagId(tags[ 0 ].id);
        }
    }, []);

    const tagsJSX =  tags?.map((tag) => {
        const TagIcon = getTagIcon(tag.name);

        return (
            <Link to = '/topics-by-tag' key = { tag.id }>
                <Tag
                    handleTagClick = { () => setSelectedTagId(tag.id) }
                    { ...tag }>
                    <TagIcon />
                </Tag>
            </Link>
        );
    });

    return (
        <aside className = 'tags-aside'>
            <h1>Тэги</h1>
            <div>{ tagsJSX }</div>
        </aside>
    );
});
