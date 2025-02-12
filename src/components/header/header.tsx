import { Page } from '../../types';
import Logo from './logo/logo';
import NavigationList from './navigation-list/navigation-list';

type HeaderProps = {
  currentPage: Page;
}

export default function Header({currentPage}: HeaderProps): JSX.Element {
  return(
    <header className="header">
      <div className="container container--size-l">
        <Logo isInactiveLink={ currentPage === 'Main' } />
        <NavigationList isAuthorized={ false } currentPage={ currentPage }/>

        <div className="header__side-nav">
          <a className="btn btn--accent header__side-item" href="#">
            Выйти
          </a>

          <a className="link header__side-item header__phone-link" href="tel:88003335599">
            8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );
}
