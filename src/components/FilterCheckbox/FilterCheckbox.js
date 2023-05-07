import './FilterCheckbox.css'

function FilterCheckbox() {
    return(
        <div className="checkbox">
            <label className="checkbox__label">
                <div className="checkbox__swicher">
                    <span className="checkbox__inside-round"/>
                </div>
                <div className="checkbox__text">Короткометражки</div>
            </label>
        </div>
    )
}

export default FilterCheckbox;