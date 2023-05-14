import "./FormTitle.css";
import Logo from "../Logo/Logo";

function FormTitle({ heading }) {
  return (
    <div className="form-title">
      <Logo cssClass="form-title__top-logo"/>
      <h1 className="form-title__heading">{heading}</h1>
    </div>
  )
}

export default FormTitle;