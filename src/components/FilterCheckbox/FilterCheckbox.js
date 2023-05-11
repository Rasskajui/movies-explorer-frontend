import './FilterCheckbox.css';

function FilterCheckbox({ text }) {
    return (
        <label for="short-check" className="search__checkbox">
            <input type="checkbox" className="search__check" id="short-check"/>
            <span className="search__checkbox-view"></span>
            <p className="search__short-label">{text}</p>
        </label>
    );
}

export default FilterCheckbox;