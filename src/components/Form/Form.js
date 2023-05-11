import "./Form.css";
import { Link } from "react-router-dom";

import Input from "../Input/Input";

function Form(props) {
  return (
    <div className="form-page">
      <div className="form-page__container">
        <form className="form" noValidate={true}>
            <fieldset className="form__fieldset">
              <Input label="Имя"/>
              <Input label="E-mail"/>
              <Input label="Пароль"/>
              <button className="form__button" type="submit">{props.buttonText}</button>
            </fieldset>
              <Link className="form__link" to={'/login'}>
                {props.descriptionLink}
                <span>{props.textLink}</span>
              </Link>
      </form>
      </div>
    </div>
  )
}

export default Form;