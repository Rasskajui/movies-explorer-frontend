import './Profile.css';
import Header from '../Header/Header';

function Profile(props) {
    return (
        <>
            <Header isAuth={true}/>
            <main className="profile">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <ul className="profile__data">
                    <li className="profile__data-el">
                        <h3 className="profile__data-text profile__data-text_type_title">Имя</h3>
                        <p className="profile__data-text">Виталий</p>
                    </li>
                    <li className="profile__data-el">
                        <h3 className="profile__data-text profile__data-text_type_title">E-mail</h3>
                        <p className="profile__data-text">pochta@yandex.ru</p>
                    </li>
                </ul>
                <div className="profile__buttons">
                    <button  type="button" aria-label="Редактировать профиль" className="profile__btn">Редактировать</button>
                    <button  type="button" aria-label="Выйти из аккаунта" className="profile__btn profile__btn_type_exit">Выйти из аккаунта</button>
                </div>
            </main>
        </>
    );
}

export default Profile;
