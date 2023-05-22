import "./Register.css";
import useValidation from '../../utils/hooks/useValidation';
import PageWithForm from "../PageWithForm/PageWithForm";
import useForm from "../../utils/hooks/useForm"

function Register({handleSubmit, ...props}) {
  const [handleValidation, errors, validity] = useValidation();
  const { values, handleChange } = useForm({
    name: '',
    email: '',
    password: ''
  });

  const onSubmit = (evt) => {
    console.log('onSubmit')
    evt.preventDefault();
    handleSubmit(values);
  };



  return (
    <section className="register">
      <PageWithForm
        title="Добро пожаловать!" 
        buttonText="Зарегистрироваться" 
        descriptionLink="Уже зарегистрированы?" 
        textLink="Войти"
        linkTo="/signin"
        labelName="Имя"
        labelEmail="E-mail"
        labelPassword="Пароль"
        inputTypeText="text"
        inputTypeEmail="email"
        onValidation={handleValidation}
        errors={errors}
        validity={validity}
        onSubmit={onSubmit}
        onChange={(evt) => {
          handleChange(evt);
          handleValidation(evt);
        }}
        {...props}
      />
    </section>
  );
}

export default Register;