import './AboutProject.css';

function AboutProject() {
    return (
        <section id="about" className="about">
            <h2 className="about__title title">О проекте</h2>
            <ul className="about__desc">
                <li className="about__desc-el">
                    <h3 className="about__desc-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about__desc-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="about__desc-el">
                    <h3 className="about__desc-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__desc-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="about__timeline">
                <p className="about__timeline-period about__timeline-period_color_black">1 неделя</p>
                <p className="about__timeline-period">4 недели</p>
                <h3 className="about__timeline-subtitle">Back-end</h3>
                <h3 className="about__timeline-subtitle">Front-end</h3>
            </div>
        </section> 
    );
}

export default AboutProject;