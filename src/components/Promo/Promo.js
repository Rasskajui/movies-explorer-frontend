import Header from "../Header/Header";
import './Promo.css';

function Promo({isAuth}) {
    return(
        <section className="promo">
            <Header isAuth={isAuth}/>
            <h1 className="promo__text">Учебный&nbsp;проект студента факультета Веб&#8209;разработки.</h1>
        </section>
    );
}

export default Promo;
