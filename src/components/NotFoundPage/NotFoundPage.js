import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <section className="not-found-page">
        <h1 className="not-found-page__title">404</h1>
        <p className="not-found-page__subtitle">Страница не найдена</p>
      <button className="not-found-page__button" type="button">Назад</button>
    </section>
  );
}

export default NotFoundPage;