import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__links">
                <li className="portfolio__element"><a href="https://rasskajui.github.io/hotel-booking" target="_blank" rel="noreferrer noopener" className="portfolio__link">Статичный сайт</a></li>
                <li className="portfolio__element"><a href="https://rasskajui.github.io/russian-travel" target="_blank" rel="noreferrer noopener" className="portfolio__link">Адаптивный сайт</a></li>
                <li className="portfolio__element"><a href="https://github.com/Rasskajui/react-mesto-api-full-gha" target="_blank" rel="noreferrer noopener" className="portfolio__link">Одностраничное приложение</a></li>
            </ul>
        </section>
    );
}

export default Portfolio;
