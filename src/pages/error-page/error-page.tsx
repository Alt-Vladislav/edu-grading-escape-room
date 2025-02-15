import { AppRoute } from '../../consts';
import { Link } from 'react-router-dom';
import './error-page.css';

export default function ErrorPage(): JSX.Element {
  return (
    <>
      <p className="zoom-area"><b>404</b> Ресурс не найден. </p>
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      <div className="link-container">
        <Link to={AppRoute.Main.Path} className="btn btn--accent btn--cta">
          На главную
        </Link>
      </div>
    </>

  );
}
