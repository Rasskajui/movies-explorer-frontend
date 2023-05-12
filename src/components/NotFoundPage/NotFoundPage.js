import './NotFoundPage.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <main className="not-found">
            <div className="not-found__message">
                <h2 className="not-found__title">404</h2>
                <p className="not-found__subtitle">Страница не найдена</p>
            </div>
            <Link to="/" className="not-found__link">Назад</Link>
        </main>
    );
}

export default NotFoundPage;