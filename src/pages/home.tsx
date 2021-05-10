import { icons } from '../theme/icons/tag';
import { Nav } from '../components/Nav'

export const HomePage = () => {
    return (
        <section className="layout">
            <Nav/>
            <section className="hero">
                <div className="title">
                    <h1>Типсы и Триксы</h1>
                    <h2>React</h2>
                </div>

                <div className="tags">
                    <span className="tag">
                        <icons.React/> React
                    </span>
                </div>
            </section>
            <section className="tip-list">
                    <article>
                        <header>
                            <icons.React/> <h1>Заголовок</h1>
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
            </section>
        </section>
    )
}