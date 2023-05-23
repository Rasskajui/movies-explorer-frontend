import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as mainApi from '../../utils/MainApi';
import Message from '../Message/Message';

function Register(props) {
    const [formValue, setFormValue] = useState({name: '', email: '', password: ''});
    const [errors, setErrors] = useState({name: '', email: '', password: ''});
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [isMessageHidden, setIsMessageHidden] = useState(true);
    const [message, setMessage] = useState('Что-то пошло не так...');
    const [isSuccess, setIsSuccess] = useState(true);

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
        mainApi.signUp(formValue)
            .then(() => {
                setIsSuccess(true);
                setMessage('Вы успешно зарегистрировались');
                setIsMessageHidden(false)
                setTimeout(() => setIsMessageHidden(true), 5000);
            })
            .then(() => props.onLogin(formValue).catch((err) => {return Promise.reject(`Ошибка ${err.status}`)}))
            .catch((err) => {
                setIsSuccess(false);
                setMessage(err);
                setIsMessageHidden(false)
                setTimeout(() => setIsMessageHidden(true), 5000);
            })
    }


    return (
        <main className="register">
            <Message isHidden={isMessageHidden} message={message} isSuccess={isSuccess}/>
            <section className="form">
                <Link to="/" className="form__logo logo"/>
                <h2 className="form__title">Добро пожаловать!</h2>
                <form className="form__form-fields" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="form__label">Имя</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name" 
                        className={`form__input ${errors.name ? 'form__input_error' : ''}`} 
                        placeholder="Имя пользователя" 
                        minLength="2" 
                        maxLength="30" 
                        required
                        value={formValue.name}
                        onChange={handleChange}
                        disabled={props.isFetching}
                    />
                    <span className="form__error">{errors.name}</span>
                    <label htmlFor="email" className="form__label">E-mail</label>
                    <input 
                        type="email"
                        id="email" 
                        name="email" 
                        className={`form__input ${errors.email ? 'form__input_error' : ''}`} 
                        placeholder="pochta@yandex.ru" 
                        required
                        value={formValue.email}
                        onChange={handleChange}
                        disabled={props.isFetching}
                    />
                    <span className="form__error">{errors.email}</span>
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
                        disabled={props.isFetching}
                    />
                    <span className="form__error">{errors.password}</span>
                    <button 
                        type="submit" 
                        className={`form__submit-btn ${isSubmitDisabled || props.isFetching ? 'form__submit-btn_disabled' : ''}`} 
                        disabled={isSubmitDisabled || props.isFetching}
                    >    
                            Зарегистрироваться
                    </button>
                </form>
                <p className="form__text">Уже зарегистрированы? <Link to="/login" className="form__link">Войти</Link></p>
            </section>
        </main>
    );
}

export default Register;
