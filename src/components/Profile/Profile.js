import "./Profile.css";

import PageWithForm from "../PageWithForm/PageWithForm";

function Profile() {
  return (
    <section className="profile">
      <PageWithForm
        title="Привет Надя!"
        buttonClass="form__button_profile"
        buttonText="Редактировать" 
        textLink="Выйти из аккаунта"
        textLinkClass="form__link-action_profile"
        linkTo="/signin"
        labelName="Имя"
        labelEmail="E-mail"
      />
    </section>
  );
}

export default Profile;