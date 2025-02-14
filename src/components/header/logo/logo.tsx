import { AppRoute } from '../../../consts';
import { Link } from 'react-router-dom';

type LogoProps = {
  isInactiveLink: boolean;
}


export default function Logo({isInactiveLink}: LogoProps): JSX.Element {
  return (
    isInactiveLink
      ? (
        <span className="logo header__logo" >
          <svg width={134} height={52} aria-hidden="true">
            <use xlinkHref="#logo" />
          </svg>
        </span>
      )
      : (
        <Link to={AppRoute.Main.Path} title={AppRoute.Main.TitleLink} aria-label={AppRoute.Main.TitleLink} className="logo header__logo" >
          <svg width={134} height={52} aria-hidden="true">
            <use xlinkHref="#logo" />
          </svg>
        </Link>
      )
  );
}
