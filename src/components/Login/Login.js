import { useState } from "react";
import { Link } from "react-router-dom";
import Message from "../Message/Message";
import { emailRegex } from "../../utils/constants";

function Login(props) {
    const [formValue, setFormValue] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({email: '', password: ''});
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [isMessageHidden, setIsMessageHidden] = useState(true);
    const [message, setMessage] = useState('Что-то пошло не так...');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const checkErrors = (input) => {
        if (!input.validity.valid) {
            setErrors({
                ...errors,
                [input.name]: input.validationMessage.split('.')[0]
            });
            setIsSubmitDisabled(true);
        } else {
            setErrors({
                ...errors,
                [input.name]: ''
            });
            if (Object.values(errors).every((el) => el === '') && Object.values(formValue).every((el) => el !== ''))
                setIsSubmitDisabled(false);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        checkErrors(e.target);

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        props.onLogin(formValue)
        .then(() => {
            setIsSubmitting(false);
        })
        .catch((err) => {
            setMessage(err);
            setIsMessageHidden(false);
            setTimeout(() => setIsMessageHidden(true), 5000);
            setIsSubmitting(false);
        })
    }

    return (
        <main className="register">
            <Message isHidden={isMessageHidden} message={message} isSuccess={false}/>
            <section className="form">
                <Link to="/" className="form__logo logo"/>
                <h2 className="form__title">Рады видеть!</h2>
                <form className="form__form-fields" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="form__label">E-mail</label>
                    <input 
                        type="email"
                        id="email" 
                        name="email" 
                        className={`form__input ${errors.email ? 'form__input_error' : ''}`} 
                        placeholder="pochta@yandex.ru" 
                        required
                        pattern={emailRegex}
                        value={formValue.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                    <span className="form__error form__error_input_email">{errors.email}</span>
                    <label htmlFor="password" className="form__label">Пароль</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        className={`form__input ${errors.password ? 'form__input_error' : ''}`}  
                        placeholder="your_password123" 
                        required
                        value={formValue.password}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                    <span className="form__error form__error_input_password">{errors.password}</span>
                    <button 
                        type="submit" 
                        className={`form__submit-btn ${isSubmitDisabled || isSubmitting ? 'form__submit-btn_disabled' : ''}`} 
                        disabled={isSubmitDisabled || isSubmitting}
                    >
                        Войти
                    </button>
                </form>
                <p className="form__text">Ещё не зарегистрированы? <Link to="/register" className="form__link">Регистрация</Link></p>
            </section>
        </main>
    );
}

export default Login;
