import "./Login.css";

import PageWithForm from "../PageWithForm/PageWithForm";

function Login() {
  return (
    <section className="login">
      <PageWithForm
        title="Рады видеть!" 
        buttonText="Войти" 
        descriptionLink="Ещё не зарегистрированы?" 
        textLink="Регистрация"
        linkTo="/signup"
        labelName="Имя"
        labelEmail="E-mail"
        labelPassword="Пароль"
      />
    </section>
  );
}

export default Login;