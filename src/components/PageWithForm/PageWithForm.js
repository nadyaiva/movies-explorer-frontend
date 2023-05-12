import "./PageWithForm.css";

import FormTitle from "../FormTitle/FormTitle";
import Form from "../Form/Form";

function PageWithForm() {
  return (
    <div className="form-page">
      <div className="form-page__container">
        <FormTitle heading="Добро пожаловать!" />
        <Form
            title="Добро пожаловать!" 
            buttonText="Зарегистрироваться" 
            descriptionLink="Уже зарегистрированы?" 
            textLink="Войти" />
      </div>
    </div>
  )
}

export default PageWithForm;