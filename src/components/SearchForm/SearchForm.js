import "./SearchForm.css";

import { useState, useEffect } from "react";

function SearchForm(props) {

const [formText, setFormText] = useState("");
const [isInputValid, setIsInputValid] = useState(false)

function handleInputValidation(inputData) {
    let regex=/^[a-zA-Z]+$/;
    if (inputData.match(regex)) {
        setIsInputValid(true);
    } else {
        setIsInputValid(false);
    }

    return isInputValid;
}

function handleSubmit(e) {
    e.preventDefault();
    if (!formText) {
        return;
    }
    else if (handleInputValidation(formText)) {
        props.onSearch(formText)
        setFormText("");
        return;
    }
    return;
}

useEffect(() => {
    setFormText("");
}, []);

    return (
         <form className="search-form" onSubmit={handleSubmit}>
            <fieldset className="search-form__fieldset">
                <div className="search-form__icon"/>
                <input
                    className="search-form__input"
                    type="text"
                    name="movie"
                    placeholder='Фильм'
                    id="search-form"
                    value={formText || ""}
                    onChange={(e) => {
                        setFormText(e.target.value);
                    }}
                />
                <button className="search-form__submit" type="submit">
                    <span className="search-form__svg"/>
                </button>
            </fieldset>
        </form>
    )
}

export default SearchForm;