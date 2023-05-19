import './FilterCheckbox.css'

import { useState } from "react";

function FilterCheckbox() {
    const [isChecked, setIsChecked] = useState(false);

    function handleSwitcher() {
        setIsChecked(!isChecked)
    }

    return(
        <div className="checkbox">
            <label className="checkbox__label">
                <span className="checkbox__wrap-switcher"> 
                    <span className={`checkbox__inside-round ${isChecked ? "checkbox__inside-round_on" : "checkbox__inside-round_off"}`}/>
                </span>
                <input className="checkbox__input" type='checkbox' onClick={handleSwitcher} />
                <span className="checkbox__text">Короткометражки</span>
            </label>
        </div>
    )
}

export default FilterCheckbox;