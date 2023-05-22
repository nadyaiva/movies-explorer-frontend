import "./Form.css";
import { Link } from "react-router-dom";
import { namePattern } from '../../utils/constants';

import Input from "../Input/Input";

function Form({ onSubmit, ...props}) {

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <Input
          pattern={namePattern}
          label={props.labelName}
          type={props.inputTypeText}
          inputId="name"
        
          {...props}
        />
        <Input 
          label={props.labelEmail}
          type={props.inputTypeEmail}
          inputId="email"
          {...props}
        />
        { props.labelPassword ? 
        <Input 
          label={props.labelPassword}
          type={props.inputTypeText}
          inputId="password"
          {...props}
          /> : 
          null}
        <button 
          className={`form__button ${props.buttonClass ? props.buttonClass : ""}`} 
          type="submit"
          // disabled={props.isLoading || !props.validity}
        >
          {props.buttonText}
        </button>
      </fieldset>
        <Link className="form__link" to={props.linkTo}>
          <span className="form__link-text">{props.descriptionLink}</span>
          <span className={`form__link-action ${props.textLinkClass ? props.textLinkClass : ""}`}>{props.textLink}</span>
        </Link>
    </form>
  )
}

export default Form;