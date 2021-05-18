import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { fetchify, formatDate, getTagIcon } from "../../helpers"
import tips from '../../mock-data/tips.json';
 
export const TipView = ()=>{
    const params = useParams();
    const navigate = useNavigate();

    const tipToView = tips.find(tip=> tip.id === params.id);

    useEffect(()=>{
        tips !== null && !tipToView && navigate('..', {
            replace: true
        });
    }, [tips, tipToView]);

    const TagIcon = getTagIcon(tipToView?.tag.name);

    const goBack = ()=>{
        navigate('..');
    }
    return(
     <>
            <article>
                <header>
                    <TagIcon /> <h1>{fetchify(false, tipToView?.title)}</h1>
                </header>

                <main>
                    <time>
                        <TagIcon />
                        <div>
                            <span>
                                🚀{' '}
                                {fetchify(
                                    false,
                                    formatDate(tipToView?.created),
                                )}
                            </span>
                            <span>
                                👨🏼‍🚀 Автор: {fetchify(false, tipToView?.author)}
                            </span>
                        </div>
                    </time>
                </main>
                <footer>
                    <a onClick={goBack}>&larr;&nbsp;Назад</a>
                </footer>
            </article>

            <main>{fetchify(false, tipToView?.body)}</main>
        </>)
}