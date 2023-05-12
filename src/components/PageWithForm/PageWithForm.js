import "./PageWithForm.css";

import FormTitle from "../FormTitle/FormTitle";
import Form from "../Form/Form";

function PageWithForm(props) {
  return (
    <div className="form-page">
      <div className="form-page__container">
        <FormTitle heading={props.title} />
        <Form {...props} />
      </div>
    </div>
  )
}

export default PageWithForm;