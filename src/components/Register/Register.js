import { Link } from 'react-router-dom';

function Register(props) {
    return (
        <main className="register">
            <section className="form">
                <Link to="/" className="form__logo logo"/>
                <h2 className="form__title">Добро пожаловать!</h2>
                <form className="form__form-fields">
                    <label for="name" className="form__label">Имя</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name" 
                        className="form__input" 
                        placeholder="Имя пользователя" 
                        minLength="2" 
                        maxLength="30" 
                        required
                    />
                    <span className="form__error"></span>
                    <label for="email" className="form__label">E-mail</label>
                    <input 
                        type="email"
                        id="email" 
                        name="email" 
                        className="form__input" 
                        placeholder="pochta@yandex.ru" 
                        required
                    />
                    <span className="form__error"></span>
                    <label for="password" className="form__label">Пароль</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        className="form__input form__input_error" 
                        placeholder="your_password123" 
                        required
                    />
                    <span className="form__error">Что-то пошло не так...</span>
                    <button type="submit" className="form__submit-btn">Зарегистрироваться</button>
                </form>
                <p className="form__text">Уже зарегистрированы? <Link to="/login" className="form__link">Войти</Link></p>
            </section>
        </main>
    );
}

export default Register;
