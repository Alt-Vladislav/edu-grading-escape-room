import { AppRoute } from '../../consts';
import { Page } from '../../types';
import { Link } from 'react-router-dom';
import Logo from './logo/logo';
import NavigationList from './navigation-list/navigation-list';


type HeaderProps = {
  currentPage: Page;
}

export default function Header({currentPage}: HeaderProps): JSX.Element {
  const isAuthorized = true; //TODO
  const isLoginHidden = currentPage === 'Login';
  const handleSignOutClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    // dispatch(logout()); TODO
  };

  return(
    <header className="header">
      <div className="container container--size-l">
        <Logo isInactiveLink={ currentPage === 'Main' } />
        <NavigationList isAuthorized={ isAuthorized } currentPage={ currentPage }/>

        <div className="header__side-nav">
          {isLoginHidden || (
            isAuthorized
              ? <Link to='' className="btn btn--accent header__side-item" onClick={ handleSignOutClick }>Выйти</Link>
              : <Link to={ AppRoute.Login.Path } title={ AppRoute.Login.TitleLink } className="btn header__side-item header__login-btn">Вход</Link>
          )}

          <a className="link header__side-item header__phone-link" href="tel:800031111111">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}
