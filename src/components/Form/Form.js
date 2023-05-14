import "./Form.css";
import { Link } from "react-router-dom";

import Input from "../Input/Input";

function Form(props) {
  return (
    <form className="form" noValidate={true}>
      <fieldset className="form__fieldset">
        <Input label={props.labelName}/>
        <Input label={props.labelEmail}/>
        { props.labelPassword ? <Input label={props.labelPassword}/> : null}
        <button className={`form__button ${props.buttonClass ? props.buttonClass : ""}`} type="submit">{props.buttonText}</button>
      </fieldset>
        <Link className="form__link" to={props.linkTo}>
          <span className="form__link-text">{props.descriptionLink}</span>
          <span className={`form__link-action ${props.textLinkClass ? props.textLinkClass : ""}`}>{props.textLink}</span>
        </Link>
    </form>
  )
}

export default Form;