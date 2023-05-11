import "./Register.css";

import Form from "../Form/Form";

function Register() {
  return (
    <section className="register">
      <Form 
      title="Добро пожаловать!" 
      buttonText="Зарегистрироваться" 
      descriptionLink="Уже зарегистрированы?" 
      textLink="Войти">
      </Form>
    </section>
  );
}

export default Register;