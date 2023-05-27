import './NotFoundPage.css';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {

    const navigate = useNavigate();

    return (
        <main className="not-found">
            <div className="not-found__message">
                <h2 className="not-found__title">404</h2>
                <p className="not-found__subtitle">Страница не найдена</p>
            </div>
            <button onClick={() => {navigate(-1)}} className="not-found__link">Назад</button>
        </main>
    );
}

export default NotFoundPage;