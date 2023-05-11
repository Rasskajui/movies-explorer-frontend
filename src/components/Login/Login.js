import { Link } from "react-router-dom";

function Login(props) {
    return (
        <main className="register">
            <section className="form">
                <Link to="/" className="form__logo logo"/>
                <h2 className="form__title">Рады видеть!</h2>
                <form className="form__form-fields">
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
                    <button type="submit" className="form__submit-btn">Войти</button>
                </form>
                <p className="form__text">Ещё не зарегистрированы? <Link to="/register" className="form__link">Регистрация</Link></p>
            </section>
        </main>
    );
}

export default Login;
