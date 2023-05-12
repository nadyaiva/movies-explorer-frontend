import "./Form.css";
import { Link } from "react-router-dom";

import Input from "../Input/Input";

function Form(props) {
  return (
    <form className="form" noValidate={true}>
      <fieldset className="form__fieldset">
        <Input label="Имя"/>
        <Input label="E-mail"/>
        <Input label="Пароль"/>
        <button className="form__button" type="submit">{props.buttonText}</button>
      </fieldset>
        <Link className="form__link" to={'/login'}>
          <span className="form__link-text">{props.descriptionLink}</span>
          <span className="form__link-action">{props.textLink}</span>
        </Link>
    </form>
  )
}

export default Form;