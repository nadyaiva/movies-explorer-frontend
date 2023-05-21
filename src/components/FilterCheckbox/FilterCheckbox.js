import './FilterCheckbox.css'

function FilterCheckbox({onCheck, checked}) {

    return(
        <div className="checkbox">
            <label className="checkbox__label">
                <span className="checkbox__wrap-switcher"> 
                    <span className={`checkbox__inside-round ${checked ? "checkbox__inside-round_on" : "checkbox__inside-round_off"}`}/>
                </span>
                <input className="checkbox__input" type='checkbox' onClick={onCheck} />
                <span className="checkbox__text">Короткометражки</span>
            </label>
        </div>
    )
}

export default FilterCheckbox;