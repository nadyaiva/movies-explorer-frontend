import './FilterCheckbox.css'

function FilterCheckbox() {
    return(
        <div className="checkbox">
            <div className="checkbox__label">
                <div className="checkbox__swicher">
                    <span className="checkbox__inside-round checkbox__inside-round_on"/>
                </div>
                <div className="checkbox__text">Короткометражки</div>
            </div>
        </div>
    )
}

export default FilterCheckbox;