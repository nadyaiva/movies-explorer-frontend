import "./Input.css";

function Input({error, ...props}) {
  return (
    <>
    <label className="input__label">
      <input 
        className={`input__input ${error ? 'input__input-error' : ''}`}
        id={props.inputId}
        placeholder={props.label} 
        type={props.type} 
        name={props.inputType}
        required
        />
      </label>
    
    <span className="input__error input__error_show input__error_hide">Что-то пошло не так...</span>
    </>
  )
}

export default Input;