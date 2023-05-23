import './FilterCheckbox.css';

function FilterCheckbox({ text, isChecked, handleChange }) {
    return (
        <label htmlFor="short-check" className="search__checkbox">
            <input type="checkbox" checked={isChecked} onChange={handleChange} className="search__check" id="short-check"/>
            <span className="search__checkbox-view"></span>
            <span className="search__short-label">{text}</span>
        </label>
    );
}

export default FilterCheckbox;