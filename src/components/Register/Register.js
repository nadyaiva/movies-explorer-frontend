import "./Register.css";

import PageWithForm from "../PageWithForm/PageWithForm";

function Register() {
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
      />
    </section>
  );
}

export default Register;