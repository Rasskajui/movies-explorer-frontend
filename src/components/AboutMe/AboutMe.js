import './AboutMe.css';
import photo from '../../images/bio-pic.jpg';

function AboutMe() {
    return (
        <section id="student" className="about-me">
            <h2 className="about-me__title title">Студент</h2>
            <div className="about-me__content">
                <article className="about-me__desc">
                    <h3 className="about-me__name">Виталий</h3>
                    <h4 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h4>
                    <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a href="https://github.com/Rasskajui" target="_blank" rel="noreferrer noopener" className="about-me__link">Github</a>
                </article>
                <img src={ photo } alt="Моя фотография" className="about-me__photo" />
            </div>
        </section>
    );
}

export default AboutMe;
