import './Profile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import {useContext, useState} from 'react';
import Popup from '../Popup/Popup';
import Message from '../Message/Message';

function Profile(props) {
    const currentUser = useContext(CurrentUserContext);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [formValue, setFormValue] = useState({ email: '', name: '' });
    const [errors, setErrors] = useState({email: '', name: ''});
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [isMessageHidden, setIsMessageHidden] = useState(true);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(true);

    const closePopup = () => {
        setIsPopupOpen(false);
    }

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
        props.onUpdateUserInfo(formValue)
        .then(() => {
            setIsPopupOpen(false);
        })
        .then(() => {
            setIsSuccess(true);
            setMessage('Данные успешно изменены');
            setIsMessageHidden(false);
            setTimeout(() => setIsMessageHidden(true), 5000);
        })
        .catch((err) => {
            setIsSuccess(false);
            setMessage(err);
            setIsMessageHidden(false);
            setTimeout(() => setIsMessageHidden(true), 5000);
        })
    }

    return (
        <>
            <Header isAuth={true}/>
            <main className="profile">
                <Message isHidden={isMessageHidden} message={message} isSuccess={isSuccess}/>
                <Popup 
                    isOpen={isPopupOpen}
                    closePopup={closePopup}
                    children={
                        <section className="form profile__form">
                            <h2 className="form__title profile__form-title ">Введите новые данные!</h2>
                            <form className="form__form-fields" onSubmit={handleSubmit}>
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
                                />
                                <span className="form__error form__error_input_email">{errors.email}</span>
                                <label htmlFor="name" className="form__label">Пароль</label>
                                <input 
                                    type="name" 
                                    id="name" 
                                    name="name" 
                                    className={`form__input ${errors.name ? 'form__input_error' : ''}`}  
                                    placeholder="Имя" 
                                    required
                                    value={formValue.name}
                                    onChange={handleChange}
                                />
                                <span className="form__error form__error_input_password profile__last-input-error">{errors.name}</span>
                                <button type="submit" className={`form__submit-btn ${isSubmitDisabled ? 'form__submit-btn_disabled' : ''}`} disabled={isSubmitDisabled}>Сохранить</button>
                            </form>
                        </section>
                    }
                />   
                <h2 className="profile__title">{`Привет, ${currentUser.name}`}</h2>
                <ul className="profile__data">
                    <li className="profile__data-el">
                        <h3 className="profile__data-text profile__data-text_type_title">Имя</h3>
                        <p className="profile__data-text">{`${currentUser.name}`}</p>
                    </li>
                    <li className="profile__data-el">
                        <h3 className="profile__data-text profile__data-text_type_title">E-mail</h3>
                        <p className="profile__data-text">{`${currentUser.email}`}</p>
                    </li>
                </ul>
                <div className="profile__buttons">
                    <button type="button" aria-label="Редактировать профиль" className="profile__btn" onClick={() => setIsPopupOpen(true)}>Редактировать</button>
                    <button onClick={props.handleExit} type="button" aria-label="Выйти из аккаунта" className="profile__btn profile__btn_type_exit">Выйти из аккаунта</button>
                </div>
            </main>
        </>
    );
}

export default Profile;
