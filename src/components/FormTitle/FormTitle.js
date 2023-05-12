import "./FormTitle.css";
import Logo from "../Logo/Logo";

function FormTitle({ heading }) {
  return (
    <div className="form-title">
      <Logo />
      <h1 className="form-title__heading">{heading}</h1>
    </div>
  )
}

export default FormTitle;