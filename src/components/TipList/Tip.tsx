import { icons } from '../../theme/icons/tag';

export const Tip = () => {
    return (
        <article>
            <header>
                <icons.React /> <h1>Заголовок</h1>
            </header>
            <main>
                <time>
                    <div>
                        <span> время</span>
                        <span> Автор: автор</span>
                    </div>
                </time>
                <h2>Заголовк</h2>
                <p>Превью-текст</p>
            </main>
            <footer>
                <a>&nbsp; Читать полностью &rarr;</a>
            </footer>
        </article>
    );
};
