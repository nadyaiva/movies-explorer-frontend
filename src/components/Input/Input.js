import "./Input.css";

function Input(props) {
  return (
    <>
    <label className="input__label"><input className="input__input" placeholder={props.label} type="email" name="email" id="auth-content-email" required="" value=""/></label>
    
    <span className="input__error input__error_show input__error_hide">Что-то пошло не так...</span>
    </>
  )
}

export default Input;