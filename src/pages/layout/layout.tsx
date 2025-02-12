import { AppRoute } from '../../consts';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import { getPageName } from '../../utils';
import classNames from 'classnames';
import Header from '../../components/header/header';
import Background from '../../components/background/background';
import Footer from '../../components/footer/footer';


export default function Layout(): JSX.Element {
  const currentPagePath = useLocation().pathname;
  const currentPageName = getPageName(currentPagePath);

  return (
    <div className="wrapper">
      <Helmet>
        <title>{ AppRoute[currentPageName].Title }</title>
      </Helmet>

      <Header currentPage={ currentPageName } />
      <main className={classNames({
        'page-content': currentPageName !== 'Quest' && currentPageName !== 'Login',
        'decorated-page': currentPageName !== 'Main',
        'quest-page': currentPageName === 'Quest',
        'login': currentPageName === 'Login',
      })}
      >

        {currentPageName === 'Main' || <Background currentPage={ currentPageName } />}
        <Outlet />

      </main>
      <Footer />
    </div>
  );
}
