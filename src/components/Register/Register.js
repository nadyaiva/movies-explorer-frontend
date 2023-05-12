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
      />
    </section>
  );
}

export default Register;