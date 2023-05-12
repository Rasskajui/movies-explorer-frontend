import './NavTab.css';

function NavTab() {
    return (
        <nav className='nav-tab'>
            <ul className="nav-tab__list">
                <li><a href="#about" className="nav-tab__el">О&nbsp;проекте</a></li>
                <li><a href="#techs" className="nav-tab__el">Технологии</a></li>
                <li><a href="#student" className="nav-tab__el">Студент</a></li>
            </ul>
        </nav>
    );
}

export default NavTab;