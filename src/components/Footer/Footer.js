import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__content">
                <p className="footer__copyright">© 2023</p>
                <ul className="footer__links">
                    <li><a href="https://practicum.yandex.ru" target="_blank" rel="noopener noreferrer" className="footer__link">Яндекс.Практикум</a></li>
                    <li><a href="https://github.com/Rasskajui" target="_blank" rel="noopener noreferrer" className="footer__link">Github</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
